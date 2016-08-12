import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../shared/containers/app'
import NotFound from '../shared/components/app/notFound'
import { Transactions } from '../routes/transactions'

export const routes = () => {
    return (
        <div>
            <Route path='/' component={App}>
                <IndexRoute component={Transactions} />
            </Route>
            <Route path='*' component={NotFound} />
        </div>
    )
}
