const initialState = {
    title: 'Dapp wallet',
    web3_status: false,
    flash_message: false
}

export default function app(state = initialState, action) {
    switch (action.type) {
        default:
			return state;
    }
}
