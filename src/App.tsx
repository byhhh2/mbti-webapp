import React from 'react';
import './App.css';
import MainComponent from './component/MainComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WriteMbti from './component/WriteMbti';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainComponent} />
          <Route path="/write" component={WriteMbti} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
