import React from 'react'

function Projects(props) {
    return (
        <section>
            <p>Here you will find all {props.adjective}!!</p>
            <ul>
                {props.projects.map((project) => (<li key={project.id}>{project.title}</li>))}
            </ul>
        </section>
    )
}

export default Projects
