import { startSubmit, stopSubmit, reset } from 'redux-form';
import _ from 'lodash';
import { transfer as transferForm, getAccounts, getBalance, getTransaction, blockchain } from '../../utils/web3';
import { add as addTransactions } from '../transactions/actions';
import { LOAD, UPDATE_BALANCE } from './actionTypes'

export function load() {
    var accounts = _.map(getAccounts(), function(address) {
        return {
            address: address,
            balance: getBalance(address)
        }
    });
    return {
        type: LOAD,
        payload: accounts
    }
}

export function transfer(form) {
    return dispatch => {
        dispatch(startSubmit('Transfer'));
        var tx = transferForm(form.from, form.to, form.value);
        if (tx) {
            dispatch(addTransactions(tx, 'transfer'));
            dispatch(stopSubmit('Transfer'));
            dispatch(reset('Transfer'));
        } else {
            dispatch(stopSubmit('Transfer', {from: 'ошибка'}));
        }
    }
}

export function updateBalance(address) {
    return {
        type: UPDATE_BALANCE,
        payload: {
            address: address,
            balance: getBalance(address)
        }
    }
}

export function observeBalance() {
    return dispatch => {
        blockchain.setSubscribe((block)=>{
            _.forEach(block.transactions, function(tx) {
                var info = getTransaction(tx);
                var accounts = getAccounts();
                var from = _.find(accounts, (address)=>address==info.from)
                if (from) {
                    dispatch(updateBalance(from));
                }
                var to = _.find(accounts, (address)=>address==info.to)
                if (to) {
                    dispatch(updateBalance(to));
                }
            })
        })
    }
}
