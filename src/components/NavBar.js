import React from 'react'
import './navBar.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects'
import Footer from './Footer';

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


                <Footer />
            </div>
        </Router>

    );
}

export default App;

