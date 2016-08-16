import { FLASH_MESSAGE } from './actionTypes'

const initialState = {
    title: 'Dapp wallet',
    flash_message: ''
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case FLASH_MESSAGE:
            return { ...state, flash_message: action.payload}

        default:
			return state;
    }
}
