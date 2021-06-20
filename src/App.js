import React from "react";
import './App.css';


function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Portfolio</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Here you will find all {props.adjective}!!</p>
      <ul>
        {props.projects.map((project) => (<li key={project.id}>{project.title}</li>))}
      </ul>
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
    <div className="App">
      <Header name="Joe" />
      <Main adjective="My info" projects={projectObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

