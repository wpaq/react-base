import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MyRoute from './MyRoute';
import Login from '../pages/Login'
import Page404 from '../pages/Page404'

const Routes = function () {
    return (
        <Switch>
            <MyRoute exact path="/" component={Login} />
            <MyRoute path="*" component={Page404} />
        </Switch>
    )
}

export default Routes
