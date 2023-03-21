import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles.css';

const App = (props) => {
  return (
    <div className="router">
      hi
      <main>
        {/*
            NOTE: The syntax below is for React-Router
              - A helpful library for routing with a React app.
              You can learn more about this at:
              https://reacttraining.com/react-router/web/guides/quick-start
        */}
        {/* <Switch>
          <Route exact path="/" component={} />
          <Route exact path="/create" component={CreateCharacter} />
        </Switch> */}
      </main>
    </div>
  );
};

export default App;
