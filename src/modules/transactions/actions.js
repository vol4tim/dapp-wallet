import _ from 'lodash'
import { getTransaction, blockchain } from '../../utils/web3'
import { CONFIRMS } from '../../config/config'
import { ADD, UPDATE } from './actionTypes'

export function add(tx, type) {
    var info = getTransaction(tx);
    var blockNumber = 0
    if (info.blockNumber !== null) {
        blockNumber = info.blockNumber
    }
    return {
        type: ADD,
        payload: {
            tx: tx,
            type: type,
            blockNumber: blockNumber,
            from: info.from,
            to: info.to,
            gas: info.gas,
            value: info.value.toString(),
            confirm: 0
        }
    }
}

export function update(tx, confirm, blockNumber) {
    return {
        type: UPDATE,
        payload: {
            tx: tx,
            confirm: confirm,
            blockNumber: blockNumber
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
