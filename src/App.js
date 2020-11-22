import React from "react";
import "./App.css";
import Home from "./Home";
import VideoGames from "./VideoGames";
import Music from "./Music";
import Science from "./Science";
import Options from "./Options";
import Film from "./Film";
import General from "./General";
import QuestionaireFormat from "./QuestionaireFormat";
import { Questionaire } from "./components";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Options} />

        <Route exact path="/Options" component={Options} />
        <Route exact path="/Questionaire" component={Questionaire} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/VideoGames" component={VideoGames} />

        <Route exact path="/Film" component={Film} />
        <Route exact path="/Science" component={Science} />
        <Route
          exact
          path="/QuestionaireFormat"
          component={QuestionaireFormat}
        />

        <Route exact path="/General" component={General} />
        <Route exact path="/Music" component={Music} />
        <Redirect to="/General" />
      </Switch>
    </Router>
  );
}

export default App;
