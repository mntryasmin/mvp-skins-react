import React from "react"
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Checkout from './pages/Checkout/Checkout'
import MyAccount from './pages/MyAccount/MyAccount'
import Product from './pages/Product/Product'
import Favorites from './pages/Favorites/Favorites'
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
import NotFound from './pages/NotFound/Error'
import Contact from './pages/Contact/Contact'
import ResetPassword from './pages/ResetPassword/ResetPassword'


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/category" component={Category} exact/>
            <Route path="/category/:id" component={Category} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/myaccount/" component={MyAccount} />
            {/* <Route path="/dashboard/my-account" component={Dashboard} />
            <Route path="/dashboard/order-history" component={Dashboard} />
            <Route path="/dashboard/security" component={Dashboard} /> */}
            <Route path="/product/:id" component={Product} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/register" component={Register} />
            <Route path="/success" component={Success} />
            <Route path="/contact" component={Contact} />
            <Route path="/resetpassword/:token" component={ResetPassword} />
            <Route component={NotFound} />
        </Switch>
    )
}