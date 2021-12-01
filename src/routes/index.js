import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Page404 from '../pages/Page404'

const Routes = function () {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="*" component={Page404} />
        </Switch>
    )
}

export default Routes
