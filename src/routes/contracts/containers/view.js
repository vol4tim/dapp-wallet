import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { View } from '../components/contracts'

class ViewContainer extends Component {
    render() {
        return <View {...this.props} />
    }
}

function mapStateToProps(state, props) {
    const contract = _.find(state.contracts.items, { address: props.params.address });
    const constants = _.filter(_.reverse(_.sortBy(contract.abi, 'name')), ['constant', true]);

    return {
        ...contract,
        constants: constants
    }
}

export default connect(mapStateToProps)(ViewContainer)
