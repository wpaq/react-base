import React from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Page404 from '../pages/Page404'

const Routes = function () {
    return (
        <Switch>
            <Route exact path="/" element={<Login />} />
            <Route path="*" element={<Page404 />} />
        </Switch>
    )
}

export default Routes
