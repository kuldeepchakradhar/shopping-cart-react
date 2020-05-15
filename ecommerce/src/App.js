import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.components';


  const hatspage = () => (
    <div>
      <h3>Hats page</h3>
    </div>
  );

  const Mens = () => (
    <div>
      <h3>Mens wear</h3>
    </div>
  );
function App() {
  return (
    <div>
      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route  path="/hats" component={hatspage} />
      <Route path="/mens" component={Mens} />
      </Switch>
    </div>
  );
}

export default App;
