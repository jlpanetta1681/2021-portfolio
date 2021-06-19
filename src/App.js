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
      <ul style={{ textalign: "left" }}>
        {props.projects.map((project) => <li>{project}</li>)};
      </ul>
    </section >
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
  "Human Rights First Asylum Analysis Project"
]



function App() {
  return (
    <div className="App">
      <Header name="Joe" />
      <Main adjective="My info" projects={projects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;

