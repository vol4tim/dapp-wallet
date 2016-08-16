import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List } from '../components/contracts'
import { remove } from '../../../modules/contracts/actions'

class ListContainer extends Component {
    render() {
        return <List items={this.props.items} onRemove={this.props.onRemove} />
    }
}

function mapStateToProps(state) {
    return {
        items: state.contracts.items
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onRemove: bindActionCreators(remove, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
