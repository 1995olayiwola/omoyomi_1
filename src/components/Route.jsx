import React from 'react';
import {Switch,Route, BrowserRouter,Redirect} from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import MyErrorBoundary from './MyErrorBoundary';
import ProjectLayout from './ProjectLayout'; 
import { Suspense } from 'react';
import Loading from './Loading';
const Register = React.lazy(()=>import('./Register'));
const Login = React.lazy(()=>import('./Login'));
const Home = React.lazy(()=>import('./Home'));
const Products = React.lazy(()=>import('./Products'));
const Product = React.lazy(()=>import('./Product'));
const Logout = React.lazy(()=>import('./Logout'));
const Notfound = React.lazy(()=>import('./Notfound'));
const Upload = React.lazy(()=>import('./Upload'));
const Interview = React.lazy(()=>import('./Interview'));
const CartItem = React.lazy(()=>import('./CartItem'));

const Layout = () => {
  return (
    <MyErrorBoundary>
      <Suspense fallback={<Loading/>}>
    <BrowserRouter>
        <Switch>
            <RouteWithLayout layout={ProjectLayout} component={Home} path="/" exact/>
            <Route component={Login} path="/login" exact/>
           
            <RouteWithLayout layout={ProjectLayout} component={Products} path="/products" exact/>
            <RouteWithLayout layout={ProjectLayout} component={Product} path="/product/:id" exact/>
            <RouteWithLayout layout={ProjectLayout} component={CartItem} path='/cart' exact/>
            <RouteWithLayout layout={ProjectLayout} component={Logout} path='/logout' exact/>
            <RouteWithLayout layout={ProjectLayout} component={Interview} path='/interview' exact/>
            <Route  component={Upload} path='/upload' exact/>
            <Route component={Notfound} path='/notfound' exact/>
            <Route component={Register} path="/register" exact/>
            <Redirect to='/notfound'/>

        </Switch>
    </BrowserRouter>
    </Suspense>
    </MyErrorBoundary>
  )
}

export default Layout