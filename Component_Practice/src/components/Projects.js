import React, { Component } from 'react';
import projects from '../data/projects.json';

class Projects extends Component {
    render(){
        let projectDesc = projects.map;
        return (
            <div>
             Projects
            </div>
        )
    }
};

export default Projects;
