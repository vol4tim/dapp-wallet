import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { List } from '../components/transactions';
import { load, updateConfirms } from '../../../modules/transactions/actions';

class ListContainer extends Component {
    componentWillMount() {
        this.props.load()
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
    const actions = bindActionCreators({load, updateConfirms}, dispatch)
    return {
        load: actions.load,
        updateConfirms: actions.updateConfirms
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
