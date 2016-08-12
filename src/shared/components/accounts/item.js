import React, { PropTypes } from 'react'
import {ListItem} from 'material-ui/List';

const Item = function(props) {
    const { address, balance } = props

    return <ListItem
        primaryText={address}
        secondaryText={balance + ' Ether'}
        disabled={true}
        />
}

Item.propTypes = {
    address: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired
}

export default Item
