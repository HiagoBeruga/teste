import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Pedidos from './pages/Pedidos';
import Portfolio from './pages/Portfolio';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/pedidos" component={Pedidos} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;