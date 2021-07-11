import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Footer from './Footer';
import NavBar from './NavBar';

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

function App() {
  return (
    <NavBar />

  );
}

export default App;
