import React, { PropTypes, Component } from 'react'

import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {grey400, yellow600} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
        >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

export default class Item extends Component {
    onTouchTap(url) {
        this.context.router.push(url);
    }

    rightIconMenu() {
        return <IconMenu iconButtonElement={iconButtonElement}>
            {this.props.deploy &&
                <MenuItem onTouchTap={()=>this.onTouchTap('/contracts/view/'+ this.props.address)}>Подробнее</MenuItem>
            }
            <MenuItem onTouchTap={()=>this.props.onRemove(this.props.address)}>Удалить</MenuItem>
        </IconMenu>
    }

    render() {
        const { address, deploy, tx, name } = this.props

        return <div>
            <ListItem
                onTouchTap={()=>deploy && this.onTouchTap('/contracts/view/'+ address)}
                leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={deploy ? yellow600 : grey400} />}
                primaryText={name}
                secondaryText={deploy ?
                    address
                    : 'tx: '+ tx
                    }
                rightIconButton={this.rightIconMenu()}
                />
        </div>
    }
}

Item.contextTypes = {
    router: PropTypes.object.isRequired
}
Item.propTypes = {
    address: PropTypes.string.isRequired,
    deploy: PropTypes.bool.isRequired,
    tx: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
}
