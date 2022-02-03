import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Board from "./components/Board";
import BoardTablesList from "./components/BoardTablesList";
import BoardPaging from "./components/BoardListWithPaging";
import BoardWrite from "./components/BoardWrite";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder 
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
           <Route exact path={["/", "/list"]} component={BoardPaging} /> 
           <Route exact path='/write' component={BoardWrite} />
           <Route exact path='/board/:bid' component={Board} />
          {/* <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
