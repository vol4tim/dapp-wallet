import React, { PropTypes, Component } from 'react'

import Constant from './constant';

import {List} from 'material-ui/List';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import AvPlaylistAddCheck from 'material-ui/svg-icons/av/playlist-add-check';

export default class View extends Component {
    render() {
        const { address, name, constants } = this.props

        return <Card>
            <CardHeader
                title={name}
                subtitle={address}
                avatar={<AvPlaylistAddCheck />}
                />
            <CardText>
                <List>
                    {constants.map(function (item, index) {
                        return <Constant key={index} {...item} />;
                    }.bind(this))}
                </List>
            </CardText>
        </Card>
    }
}

View.propTypes = {
    address: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    constants: PropTypes.array.isRequired
}
