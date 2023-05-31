import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Novo from './pages/Novo';
import Erro404 from './pages/Erro404';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/novo" component={Novo} />
          <Route component={Erro404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
