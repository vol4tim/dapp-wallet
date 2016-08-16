import _ from 'lodash'
import { REMOVE } from './actionTypes'

const initialState = {
    items: [
		{
			address: '0x11111111111',
			deploy: true,
			tx: '',
			name: 'Первый',
			abi: [{'constant':true,'inputs':[],'name':'name','outputs':[{'name':'','type':'string'}],'type':'function'},{'constant':false,'inputs':[{'name':'_address','type':'address'},{'name':'_value','type':'uint256'}],'name':'approve','outputs':[],'type':'function'},{'constant':true,'inputs':[],'name':'getBalance','outputs':[{'name':'','type':'uint256'}],'type':'function'},{'constant':true,'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':'uint256'}],'type':'function'},{'constant':false,'inputs':[{'name':'_from','type':'address'},{'name':'_to','type':'address'},{'name':'_value','type':'uint256'}],'name':'transferFrom','outputs':[{'name':'','type':'bool'}],'type':'function'},{'constant':true,'inputs':[],'name':'decimals','outputs':[{'name':'','type':'uint8'}],'type':'function'},{'constant':false,'inputs':[{'name':'_value','type':'uint256'}],'name':'burn','outputs':[],'type':'function'},{'constant':false,'inputs':[{'name':'_value','type':'uint256'}],'name':'emission','outputs':[],'type':'function'},{'constant':false,'inputs':[{'name':'_owner','type':'address'}],'name':'delegate','outputs':[],'type':'function'},{'constant':true,'inputs':[{'name':'','type':'address'}],'name':'balanceOf','outputs':[{'name':'','type':'uint256'}],'type':'function'},{'constant':true,'inputs':[],'name':'owner','outputs':[{'name':'','type':'address'}],'type':'function'},{'constant':true,'inputs':[],'name':'symbol','outputs':[{'name':'','type':'string'}],'type':'function'},{'constant':false,'inputs':[{'name':'_to','type':'address'},{'name':'_value','type':'uint256'}],'name':'transfer','outputs':[{'name':'','type':'bool'}],'type':'function'},{'constant':true,'inputs':[{'name':'','type':'address'},{'name':'','type':'address'}],'name':'allowance','outputs':[{'name':'','type':'uint256'}],'type':'function'},{'constant':true,'inputs':[{'name':'_address','type':'address'}],'name':'getBalance','outputs':[{'name':'','type':'uint256'}],'type':'function'},{'constant':false,'inputs':[{'name':'_address','type':'address'}],'name':'unapprove','outputs':[],'type':'function'},{'inputs':[{'name':'_name','type':'string'},{'name':'_symbol','type':'string'},{'name':'_decimals','type':'uint8'},{'name':'_start_count','type':'uint256'}],'type':'constructor'},{'anonymous':false,'inputs':[{'indexed':true,'name':'_from','type':'address'},{'indexed':true,'name':'_to','type':'address'},{'indexed':false,'name':'_value','type':'uint256'}],'name':'Transfer','type':'event'},{'anonymous':false,'inputs':[{'indexed':true,'name':'_owner','type':'address'},{'indexed':true,'name':'_spender','type':'address'},{'indexed':false,'name':'_value','type':'uint256'}],'name':'Approval','type':'event'}],
			result: []
		},
        {
            address: '0x22222222222',
            deploy: true,
            tx: '',
            name: 'Второй',
            abi: [],
            result: []
        },
        {
            address: '',
            deploy: false,
            tx: '0x12cc1f1e57bc28785def785bd780d08efbc69c6768dbb1ae1a183c473d7f5302',
            name: 'nретий',
            abi: [],
            result: []
        }
	],
    select_func: ''
}

export default function contracts(state = initialState, action) {
    switch (action.type) {
		case REMOVE:
			return { ...state, items: _.remove(state.items, function(item) {
				return item.address != action.payload;
			})}

        default:
          return state;
    }
}
