import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../components/app/header'
import Footer from '../components/app/footer'

import './style.css'

class App extends Component {
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

export default connect(mapStateToProps)(App)
