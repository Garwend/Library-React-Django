import { useEffect } from 'react';
import {HashRouter as Router, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/userActions';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute/UnauthenticatedRoute';
import Header from './components/Header/Header';

import './App.css';



const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (window.localStorage.getItem('token') !== null) dispatch(getUser())
  },[dispatch])

  return (
    <Router>
      <div id="library">
        <Header />
        <main>
          <Switch>
            <PrivateRoute exact path='/' component={HomePage}/>
            <UnauthenticatedRoute path='/register' component={RegisterPage}/>
            <UnauthenticatedRoute path='/login' component={LoginPage}/>
          </Switch>
        </main>
      </div>
    </Router>

  );
}

export default App;
