import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { transfer } from '../../../modules/accounts/actions';
import { Form } from '../components/transfer';

export const fields = [ 'from', 'to', 'value' ]

const validate = values => {
    const errors = {};
    if (!values.from) {
        errors.from = 'required'
    }
    if (!values.to) {
        errors.to = 'required'
    }
    if (!values.value) {
        errors.value = 'required'
    }
    //errors._error = 'full error'
    return errors
};

function mapStateToProps(state) {
    return {
        accounts: state.accounts.items
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onSubmit: bindActionCreators(transfer, dispatch)
    }
}
export default reduxForm({
    form: 'Transfer',
    fields,
    validate
}, mapStateToProps, mapDispatchToProps)(Form)
