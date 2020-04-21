import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Cart from './views/Cart/index'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  )
}
