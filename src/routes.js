import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './views/Home'
import Cart from './views/Cart/index'
import SingleProduct from './views/SingleProduct'
import AboutProject from './views/AboutProject'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/product/:id" component={SingleProduct} />
      <Route path="/project" component={AboutProject} />
      <Redirect path="/*" to="/" />
    </Switch>
  )
}
