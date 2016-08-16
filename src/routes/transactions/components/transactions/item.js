import React, { PropTypes } from 'react'
import { CONFIRMS } from '../../../../config/config'

import {Card, CardHeader, CardText} from 'material-ui/Card';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';
import AvPlaylistPlay from 'material-ui/svg-icons/av/playlist-play';
import Badge from 'material-ui/Badge';

const Item = function(props) {
    const { tx, type, from, to, value, gas, confirm } = props

    var avatar = <Badge
            badgeContent={(confirm <= CONFIRMS) ? confirm : '>'+ CONFIRMS}
            secondary={true}
            badgeStyle={{top: 9, right: 11}}
            >
            {confirm >= CONFIRMS ?
                <AvPlaylistAddCheck />
            :
                <AvPlaylistPlay />
            }
        </Badge>

    return <Card>
        <CardHeader
            title={tx}
            subtitle={type}
            avatar={avatar}
            actAsExpander={true}
            showExpandableButton={true}
            />
        <CardText expandable={true}>
            from - {from}<br />
            to - {to}<br />
            value - {value}<br />
            gas - {gas}
        </CardText>
    </Card>
}

Item.propTypes = {
    tx: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    gas: PropTypes.number.isRequired,
    confirm: PropTypes.number.isRequired
}

export default Item
