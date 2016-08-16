import { REMOVE } from './actionTypes'

export function remove(address) {
    return {
        type: REMOVE,
        payload: address
    }
}
