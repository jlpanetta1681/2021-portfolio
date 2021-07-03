import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";





function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const projects = [
  "Village Book Builders",
  "Anytime Fitness Fitness Tracker App",
  "Human Rights First Asylum Analysis Project",
  "Facebook Clone",
  "Python Pong",
  "Space invaders",

];
const projectObjects = projects.map((project, i) => ({ id: i, title: project }));
console.log(projectObjects)

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="page-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/contact' component={Contact}></Route>
        </Switch>


        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}





export default App;

