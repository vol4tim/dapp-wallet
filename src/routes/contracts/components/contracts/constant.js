import React, { PropTypes, Component } from 'react'

import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class Constant extends Component {
    render() {
        const { name, inputs } = this.props

        var itemView;
        if (inputs.length > 0) {
            itemView
        } else {
            itemView = <ListItem
                disabled={true}
                primaryText={name}
                />
        }

        return <div>
            {itemView}
            <Divider />
        </div>
    }
}

Constant.propTypes = {
    name: PropTypes.string.isRequired
}
