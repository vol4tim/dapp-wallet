import _ from 'lodash'
import { getTransaction, blockchain } from '../../utils/web3'
import collection from '../../utils/db'
import { CONFIRMS } from '../../config/config'
import { LOAD, ADD, UPDATE } from './actionTypes'

var db = collection('transactions')

export function load() {
    return dispatch => {
        db.find({}).sort({ time: -1 }).limit(10).exec(function (err, docs) {
            if (err === null) {
                dispatch({
                    type: LOAD,
                    payload: docs
                })
            }
        });
    }
}

export function add(tx, type) {
    var info = getTransaction(tx);
    var blockNumber = 0
    if (info.blockNumber !== null) {
        blockNumber = info.blockNumber
    }
    const doc = {
        tx: tx,
        type: type,
        blockNumber: blockNumber,
        from: info.from,
        to: info.to,
        gas: info.gas,
        value: info.value.toString(),
        confirm: 0,
        time: Date.now()
    }
    db.insert(doc)
    return {
        type: ADD,
        payload: doc
    }
}

export function update(tx, confirm, blockNumber) {
    var doc = {
        confirm: confirm,
        blockNumber: blockNumber
    }
    db.update({ tx: tx }, { $set: doc }, {});
    return {
        type: UPDATE,
        payload: {
            ...doc,
            tx: tx
        }
    }
}

export function updateConfirms() {
    // обовляем количество подтверждений
    return (dispatch, getState) => {
        blockchain.setSubscribe((block)=>{
            const { transactions } = getState();
            _.forEach(transactions.items, function(item) {
                var blockNumber = item.blockNumber
                if (blockNumber == 0) {
                    var index = _.findIndex(block.transactions, (hash)=>hash==item.tx)
                    if (index >= 0) {
                        blockNumber = block.number
                    }
                }
                if (blockNumber > 0 && (item.confirm <= CONFIRMS || (block.number - item.blockNumber) <= CONFIRMS)) {
                    dispatch(update(item.tx, block.number - item.blockNumber, blockNumber))
                }
            })
        })
    }
}
