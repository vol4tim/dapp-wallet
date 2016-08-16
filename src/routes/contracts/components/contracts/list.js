import React, { PropTypes } from 'react'
import Item from './item'

import {List as ListUi} from 'material-ui/List';

const List = function(props) {
    const { items, onRemove } = props

    return <ListUi>
        {items.map(function(item) {
            return <Item key={item.address} {...item} onRemove={onRemove} />;
        })}
    </ListUi>
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default List
