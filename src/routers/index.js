import React from "react";
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import AsyncLoad from 'components/asyncLoad';

const Home = AsyncLoad(() => import('container/home'));
const Other = AsyncLoad(() => import('container/other' ));

class Routers extends React.Component {
    render() {
      return <HashRouter>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/other' component={Other}/>
                <Redirect from='*' to='/home'/>
            </Switch>
        </HashRouter>
    }
  }
  export default Routers;