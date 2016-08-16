import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { List } from '../components/transactions';
import { updateConfirms } from '../../../modules/transactions/actions';

class ListContainer extends Component {
    componentWillMount() {
        this.props.updateConfirms()
    }
    render() {
        return <List items={this.props.items} />
    }
}

function mapStateToProps(state) {
    return {
        items: _.slice(state.transactions.items, 0, 10)
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateConfirms: bindActionCreators(updateConfirms, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
