import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/register' component={RegisterPage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
