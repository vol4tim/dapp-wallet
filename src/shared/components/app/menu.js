import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import MenuItem from 'material-ui/MenuItem';
import ActionDescription from 'material-ui/svg-icons/action/description';
import AvFeaturedPlayList from 'material-ui/svg-icons/av/featured-play-list.js';
import Subheader from 'material-ui/Subheader';

const Menu = function(props) {
    return <div>
        <Subheader>Меню</Subheader>
        <MenuItem leftIcon={<AvFeaturedPlayList />} onTouchTap={props.handleClose} containerElement={<Link to="/" />}>Транзакции</MenuItem>
        <MenuItem leftIcon={<ActionDescription />} onTouchTap={props.handleClose} containerElement={<Link to="/contracts" />}>Контракты</MenuItem>
    </div>
}

Menu.propTypes = {
    handleClose: PropTypes.func.isRequired
}

export default Menu
