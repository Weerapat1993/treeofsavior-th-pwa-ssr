import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute, PublicRoute } from '../config/auth'

import Layouts from 'components/Layouts'

// import Home from './Home'
import Build from './pages/build'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'

// Error
// import NotFound from './errors/NotFound'

const Routes = ({ authed }) => (
  <Switch>
    <Layouts authed={authed} >
      <Route path='/' exact component={Build} />
      <PublicRoute authed={authed} path='/login' component={Login} />
      <PublicRoute authed={authed} path='/register' component={Register} />
      <PrivateRoute authed={authed} path='/dashboard' component={Dashboard} />
    </Layouts>
  </Switch>
)

export default Routes;