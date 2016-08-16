import { LOAD, ADD, UPDATE } from './actionTypes'

const initialState = {
    items: []
}

export default function transactions(state = initialState, action) {
    switch (action.type) {
		case LOAD:
			return { ...state, items: action.payload}

		case ADD:
			return { ...state, items: [action.payload, ...state.items]}

        case UPDATE:
            var items = state.items.map((item) => {
                if (item.tx === action.payload.tx) {
                    return {...item, confirm: action.payload.confirm, blockNumber: action.payload.blockNumber}
                }
                return item
            })
            return {...state, items: items}

        default:
          return state;
    }
}
