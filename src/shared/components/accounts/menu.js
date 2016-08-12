import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import List from './list'

import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import AccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet.js';

const Menu = function(props) {
    return <div>
        <Subheader>Аккаунты</Subheader>
        <MenuItem leftIcon={<AccountBalanceWallet />} onTouchTap={props.handleClose} containerElement={<Link to="/accounts/transfer" />}>Отправить</MenuItem>
        {<List items={props.accounts} />}
    </div>
}

Menu.propTypes = {
    accounts: PropTypes.array.isRequired,
    handleClose: PropTypes.func.isRequired
}

export default Menu
