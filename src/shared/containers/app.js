import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../components/app/header'
import Footer from '../components/app/footer'
import { flashMessage } from '../../modules/app/actions'
import { load, observeBalance } from '../../modules/accounts/actions'
import Snackbar from 'material-ui/Snackbar';

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
            <Snackbar
                open={(this.props.flash_message=='') ? false : true}
                message={this.props.flash_message}
                autoHideDuration={5000}
                onRequestClose={()=>this.props.flashMessage('')}
                />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        title: state.app.title,
        flash_message: state.app.flash_message,
        accounts: state.accounts.items
    }
}
function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({load, observeBalance, flashMessage}, dispatch)
    return {
        load: actions.load,
        observeBalance: actions.observeBalance,
        flashMessage: actions.flashMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
