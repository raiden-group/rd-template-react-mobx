import React from "react";
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import AsyncLoad from 'components/asyncLoad';

const Home = AsyncLoad(() => import(/* webpackChunkName: "home" */ 'view/home'));

class Routers extends React.Component {
    render() {
      return <HashRouter>
            <Switch>
                <Route path='/home' component={Home}/>
                <Redirect from='*' to='/home'/>
            </Switch>
        </HashRouter>
    }
  }
  export default Routers;