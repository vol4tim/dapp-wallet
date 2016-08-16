import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../shared/containers/app'
import NotFound from '../shared/components/app/notFound'
import { Transactions } from '../routes/transactions'
import { Transfer } from '../routes/transfer'

export const routes = () => {
    return (
        <div>
            <Route path='/' component={App}>
                <IndexRoute component={Transactions} />
                <Route path='transfer' component={Transfer} title='Добавить контракт' />
            </Route>
            <Route path='*' component={NotFound} />
        </div>
    )
}
