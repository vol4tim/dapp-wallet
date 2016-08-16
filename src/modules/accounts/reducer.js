import { LOAD, UPDATE_BALANCE } from './actionTypes'

const initialState = {
    items: []
}

export default function accounts(state = initialState, action) {
    switch (action.type) {
        case LOAD:
            return { ...state, items: action.payload}

        case UPDATE_BALANCE:
            var items = state.items.map((item) => {
                if (item.address === action.payload.address) {
                    return {...item, balance: action.payload.balance}
                }
                return item
            })
            return {...state, items: items}

        default:
			return state;
    }
}
