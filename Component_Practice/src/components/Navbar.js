import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <div>
                <nav>
                    <ul id="nav">
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="resume">Resume</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>

        )
    }
};

export default Navbar;