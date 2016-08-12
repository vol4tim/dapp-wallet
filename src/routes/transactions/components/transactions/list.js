import React, { PropTypes } from 'react'
import Item from './item'

const List = function(props) {
    return <div>
        {props.items.map(function(item) {
            return <Item key={item.tx} {...item} />;
        })}
    </div>
}

List.propTypes = {
    items: PropTypes.array.isRequired
}

export default List
