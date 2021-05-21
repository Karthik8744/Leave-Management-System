import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserComponent from './components/UserComponent';
import Login from './components/Login'
import Home from "./components/Home";
import AddLeave from "./components/AddLeave";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>Leave Management</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/getAll' component={UserComponent} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/addLeave' component={AddLeave} />
            
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;

