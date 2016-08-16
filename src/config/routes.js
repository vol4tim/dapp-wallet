import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../shared/containers/app'
import NotFound from '../shared/components/app/notFound'
import { Transactions } from '../routes/transactions'
import { Transfer } from '../routes/transfer'
import { Contracts, ContractAdd, ContractDeploy, ContractView } from '../routes/contracts'

export const routes = () => {
    return (
        <div>
            <Route path='/' component={App}>
                <IndexRoute component={Transactions} />
                <Route path='transfer' component={Transfer} />
                <Route path='contracts'>
                    <IndexRoute component={Contracts} />
                    <Route path='add' component={ContractAdd} />
                    <Route path='deploy' component={ContractDeploy} />
                    <Route path='view/:address' component={ContractView} />
                </Route>
            </Route>
            <Route path='*' component={NotFound} />
        </div>
    )
}
