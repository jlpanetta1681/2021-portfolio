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

function Header(props) {
  return (
    <header>
      <h1>Welcome to My Page!</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <img src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.18169-9/535026_10151558887181737_507928077_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=Eoeg8SohjEgAX-pJILu&_nc_ht=scontent-ort2-2.xx&oh=31e8e52c0db61c4349e57fcc005f5806&oe=60DF3F5B" alt="selfie" />
    </section>
  );
}


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
        <ul>
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

