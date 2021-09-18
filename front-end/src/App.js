import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/register' component={RegisterPage}/>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
