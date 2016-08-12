const initialState = {
    items: [
        {
            address: '0x1111111111',
            balance: 100
        }
    ]
}

export default function accounts(state = initialState, action) {
    switch (action.type) {
        default:
			return state;
    }
}
