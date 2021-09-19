import {HashRouter as Router, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';
import UnauthenticatedRoute from './components/UnauthenticatedRoute/UnauthenticatedRoute';


const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <PrivateRoute exact path='/' component={HomePage}/>
          <UnauthenticatedRoute path='/register' component={RegisterPage}/>
          <UnauthenticatedRoute path='/login' component={LoginPage}/>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
