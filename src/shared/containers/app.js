import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/app/header'
import Footer from '../components/app/footer'
import { load, observeBalance } from '../../modules/accounts/actions'

import './style.css'

class App extends Component {
    componentWillMount() {
        this.props.load()
        this.props.observeBalance()
    }
    render() {
        return <div>
            <Header title={this.props.title} accounts={this.props.accounts} />
            <div className="container">
                {this.props.children}
            </div>
            <Footer />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        title: state.app.title,
        accounts: state.accounts.items
    }
}
function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({load, observeBalance}, dispatch)
    return {
        load: actions.load,
        observeBalance: actions.observeBalance
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
