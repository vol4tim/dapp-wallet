const initialState = {
    items: [
		{
			tx: '0x1321321321321321321',
			type: 'deploy',
			from: '0x1111111111111111',
			to: '0x22222222222222',
			gas: 10000,
            value: '100',
			confirm: 4
		},
		{
			tx: '0x78108b438eb4d6a7d4cdaf4c61cd3825cb2718e3615f608bba3ffd21bb0ae2f3',
			type: 'transfer',
			from: '0x1111111111111111',
			to: '0x22222222222222',
			gas: 10000,
            value: '100',
			confirm: 4
		}
	]
}

export default function transactions(state = initialState, action) {
    switch (action.type) {
        default:
          return state;
    }
}
