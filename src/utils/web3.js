var Promise = require('es6-promise').Promise;
var _ = require('lodash')

export function getWeb3() {
	if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else if (typeof Web3 !== 'undefined') {
        web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    } else if(typeof web3 == 'undefined' && typeof Web3 == 'undefined') {
        return false
    }
    return web3
}

export function getAccounts() {
	return web3.eth.accounts
}

export function getBalance(address) {
	return parseFloat(web3.fromWei(web3.eth.getBalance(address), 'ether').toString())
}

export function isAccounts() {
	if (web3.eth.accounts.length > 0) {
		return true
	}
	return false
}

export function transfer(from, to, value) {
    return web3.eth.sendTransaction({
		from: from,
		to: to,
		value: web3.toWei(value, 'ether'),
		gas: 3000000
	})
}

export function getTransaction(tx) {
    return web3.eth.getTransaction(tx);
}

export function getContract(abi, address) {
    return web3.eth.contract(abi).at(address)
}

export class Blockchain {
	subscribes = []
	web3 = false
    constructor(web3) {
		this.web3 = web3
		if (this.web3) {
			this.observeLatestBlocks()
		}
    }
	observeLatestBlocks() {
		var self = this
		this.web3.eth.filter('latest').watch(function(e, hash){
			if (!e) {
				var blockInfo = self.web3.eth.getBlock(hash);
				_.forEach(self.subscribes, function(item) {
					if (_.isFunction(item)) {
						item(blockInfo)
					} else {
						if (_.findIndex(blockInfo.transactions, (i)=>i==item.tx) >= 0) {
							var transaction = self.web3.eth.getTransaction(item.tx)
							if (transaction) {
								item.cb(transaction)
								self.removeSubscribeTx(item.tx)
							}
						}
					}
				})
			}
		});
	}
	observeBlock() {
		var self = this
		return new Promise(function(resolve) {
			self.setSubscribe(function() {
				resolve()
			});
		});
	}
    setSubscribe(cb) {
        this.subscribes.push(cb)
    }
	subscribeTx(tx) {
		var self = this
		return new Promise(function(resolve) {
			self.setSubscribe({
				tx: tx,
				cb: function(tx) {
					resolve(tx)
				}
			});
		});
	}
    removeSubscribeTx(tx) {
		_.remove(this.subscribes, function(f) {
			return !_.isFunction(f) && f.tx == tx;
		});
    }
}

export const blockchain = new Blockchain(getWeb3())

// blockchain.subscribeTx('0x111111').
// 	then((tx)=>{
// 		console.log('tx', tx);
// 	}).
// 	catch(function(e) {
// 		console.log(e);
// 	});
//
// blockchain.setSubscribe(()=>{
// 	console.log('update 1');
// })
//
// blockchain.setSubscribe(()=>{
// 	console.log('update 2');
// })
