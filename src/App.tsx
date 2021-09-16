import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//context
import { Provider } from './context/Context';

//component
import MainComponent from './component/MainComponent';
import WriteMbti from './component/WriteMbti';
import Question from './component/Question';
import Statistics from './component/Statistics';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={MainComponent} />
            <Route path="/write" component={WriteMbti} />
            <Route path="/question" component={Question} />
            <Route path="/statistics/:num" component={Statistics} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
