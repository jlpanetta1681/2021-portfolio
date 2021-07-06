import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "Joe Panetta",
//       headerLinks: [
//         { title: "Home", path: "/" },
//         { title: "About", path: "/about" },
//         { title: "Contact", path: "/contact" },
//         { title: "Projects", path: "/projects" },
//       ],
//       home: {
//         title: "The cutting edge of software design",
//         subTitle: "Changing the world one application at a time!",
//         text: "Check out my projects by clicking an image",
//       },

//       about: {
//         title: "About Me",
//       },

//       contact: {
//         title: "Need to chat or have a question?",
//       },

//       projects: {
//         title: "Some of my best work",
//       },
//     };
//   }

//   render() {
//     return <App />;
//   }
// }


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
          <Route exact path='/projects' component={Projects}></Route>
        </Switch>

        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}

export default App;
