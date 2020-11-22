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
            Welcome to React JS Mini Quiz Game! <br></br>
            (10 Questions included)
          </Button>
        </h1>
        <h1 className="h2">
          <Button>Please select one of the following Quiz Topics:</Button>
        </h1>

        <div class="button_topics">
          <div className="btn_1">
            <Link to="/Home">
              <Button variant="contained" color="secondary">
                Computer Science & Engineering
              </Button>{" "}
            </Link>
          </div>
          <div className="btn_2">
            <Link to="/General">
              <Button variant="contained" color="secondary">
                General Knowledge
              </Button>
            </Link>
          </div>
          <div className="btn_3">
            <Link to="/Film">
              <Button variant="contained" color="secondary">
                <i class="fas fa-function "></i>Entertainment: Film{" "}
              </Button>
            </Link>{" "}
          </div>
        </div>
        <br></br>
        <br></br>
        <h1 className="h1">
          <Button color="primary">If you want more than 10 questions</Button>
          <Link to="/QuestionaireFormat">
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              //endIcon={<Icon>send</Icon>}
            >
              > Change questionaire format
            </Button>
          </Link>
        </h1>
      </header>
      <footer><div>
      <Button color="primary">&copy;Edona Haziraj | React JS Class - 2020</Button></div></footer>
    </div>
    
  );
}
export default Options;
