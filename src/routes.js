import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/home';
import Avaliacao from './pages/avaliacao';
import Resultados from './pages/resultados';
import Rankings from './pages/RankingsEmpresas';

const WomenForceRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/avaliacao' component={Avaliacao} />
        <Route path='/resultados' component={Resultados} />
        <Route path='/rankings' component={Rankings} />
        <Route path='*'>
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </Router>
  )
}
export default WomenForceRouter;
