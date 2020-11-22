import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Options() {
  const classes = useStyles();

  return (
    <div className="App">
      <header className="div1">
        <i class="fa fa-question fa-5x"></i>
        <h1 className="h1">
          <Button color="primary">
            Welcome to the Quiz Game! <br></br>
          </Button>
        </h1>
        <h1 className="h2">
          <Button>Please select one of the following Quiz Topics:</Button>
        </h1>

        <div class="button_topics">
          <div className="btn_1">
            <Link to="/VideoGames">
              <Button variant="contained" color="primary">
                Entertainment: Video Games
              </Button>{" "}
            </Link>
          </div>
          <div className="btn_2">
            <Link to="/Music">
              <Button variant="contained" color="primary">
                Entertainment: Music
              </Button>
            </Link>
          </div>
          <div className="btn_3">
            <Link to="/Science">
              <Button variant="contained" color="primary">
                <i class="fas fa-function "></i>Science & Nature{" "}
              </Button>
            </Link>{" "}
          </div>
        </div>
        <br></br>
        <br></br>
      </header>
    </div>
  );
}
export default Options;
