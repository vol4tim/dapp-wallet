import { FLASH_MESSAGE } from './actionTypes'

export function flashMessage(message) {
    return {
        type: FLASH_MESSAGE,
        payload: message
    }
}
