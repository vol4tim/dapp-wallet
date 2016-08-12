import { connect } from 'react-redux'
import _ from 'lodash'
import { List } from '../components/transactions';

function mapStateToProps(state) {
    return {
        items: _.slice(state.transactions.items, 0, 10)
    }
}

export default connect(mapStateToProps)(List)
