import React from 'react';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact'
//Import the Navigation component
import Navigation from './components/navigation/Navigation';
//Import the Route component
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Welcome name="Kyle" />
      <Clock />
      <Contact /> */}
      {/* define our routes (replaces the three things above (lines 12-14) with three paths)*/}
      {/* render the Navigation component */}
      <Navigation />
      <Route exact path="/" render={(props) => <Welcome {...props} name="Kyle" />} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
