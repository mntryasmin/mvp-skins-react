import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Checkout from './pages/Checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import Product from './pages/Product/Product'
import Favorites from './pages/Favorites/Favorites'
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
// import NotFound from './pages/NotFound/NotFound'
import Contact from './pages/Contact/Contact'



export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/category" component={Category} />
            <Route path="/category/:id" component={Category} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/product/:id" component={Product} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/register" component={Register} />
            <Route path="/success" component={Success} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    )
}