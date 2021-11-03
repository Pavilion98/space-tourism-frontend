import './App.css';
import CrewPage from './pages/Crew/CrewPage';
import DestinationPage from './pages/Destination/DestinationPage';
import HomePage from './pages/HomePage/HomePage';
import { Data } from './data';

import { Switch, Route, Redirect } from "react-router-dom";



const App = () => {
  return (
    <Switch>
      <Route path="/crew/:crewId">
        <CrewPage data={Data} />
      </Route>
      <Route path="/crew">
        <Redirect to="/crew/Douglas-Hurley" />
      </Route>
      <Route path="/destination/:planetId">
        <DestinationPage data={Data} />
      </Route>
      <Route path="/destination">
        <Redirect to="/destination/moon" />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    
    </Switch>
    
  );
}

export default App;
