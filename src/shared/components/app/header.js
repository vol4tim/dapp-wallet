import React, { PropTypes, Component } from 'react'

import Menu from './menu';
import AccountsMenu from '../accounts/menu';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

    render() {
        return <div>
            <AppBar
                title={this.props.title}
                onLeftIconButtonTouchTap={this.handleToggle}
                />
            <Drawer
                docked={false}
                width={400}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                >
                {<Menu handleClose={this.handleClose} />}
                <Divider />
                {<AccountsMenu accounts={this.props.accounts} handleClose={this.handleClose} />}
            </Drawer>
        </div>
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    accounts: PropTypes.array.isRequired
}
