import React, { Component } from 'react'

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class Form extends Component {
    render() {
        const {
            fields: { from, to, value },
            handleSubmit,
            error,
            submitting,
            accounts
        } = this.props

        return (<form className="component" onSubmit={handleSubmit}>
                <div className="input-group">
                    <div>
                        <SelectField {...from}
                            value={from.value || ''}
                            errorText={from.touched && from.error ? from.error : ''}
                            hintText='from'
                            floatingLabelText='From'
                            fullWidth={true}
                            onChange={(evt, index, value)=>from.onChange(value)}>
                            {accounts.map(option => <MenuItem key={option.address} value={option.address} primaryText={option.address} secondaryText={option.balance +' ether'} />)}
                        </SelectField>
                    </div>
                    <div>
                        <TextField {...to}
                            errorText={to.touched && to.error ? to.error : ''}
                            hintText='to'
                            floatingLabelText='to'
                            fullWidth={true}
                            />
                    </div>
                    <div>
                        <TextField {...value}
                            errorText={value.touched && value.error ? value.error : ''}
                            hintText='value'
                            floatingLabelText='value'
                            fullWidth={true}
                            />
                    </div>
                    <div>
                        <RaisedButton
                            type='submit'
                            disabled={submitting}
                            label={submitting ? '...' : 'Отправить'}
                            labelPosition="before"
                            primary={true}
                            fullWidth={true}
                            icon={<ContentSend />}
                            />
                    </div>
                </div>
                {error && <div>{error}</div>}
            </form>
        )
    }
}
