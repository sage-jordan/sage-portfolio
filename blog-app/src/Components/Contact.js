import React from 'react';
import { Container, Segment, Image, Header } from 'semantic-ui-react';
import programmer from '../assets/teal/undraw_programmer.png';
import github from '../assets/icons/GitHub-Mark.png';

const Projects = () => {
    return (
        <Container>
            <Segment>
                <Header as='h2' color='teal'> Contact me </Header>
                <p><a href="https://www.linkedin.com/in/sage-jordan" target="_blank">
                    LinkedIn
                </a></p>
                <p><a href="https://github.com/sage-jordan" target="_blank">
                    Github
                </a></p>
                <p><a href="mailto:sagemjordan@gmail.com" target="_blank">
                    Email
                </a></p>
                <p><a href="https://medium.com/@sagemjordan" target="_blank">
                    Medium
                </a></p>
                <Image src={programmer} />
            </Segment>
        </Container>
    )
}

export default Projects;