import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

import './App.css';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
