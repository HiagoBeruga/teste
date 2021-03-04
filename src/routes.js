import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Encomendas from './pages/Encomendas';
import Portfolio from './pages/Portfolio';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/encomendas" component={Encomendas} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;