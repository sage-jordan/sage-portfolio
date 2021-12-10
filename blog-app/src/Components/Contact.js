import React from 'react';
import { Container, Segment, Image, Header } from 'semantic-ui-react';
import programmer from '../assets/teal/undraw_programmer.png';
import GitHub from '../assets/icons/GitHub-Mark.png';
import LinkedIn from '../assets/icons/LinkedIn.png';
import Gmail from '../assets/icons/Gmail.png';

const Projects = () => {
    return (
        <Container>
            <Segment>
                <Header as='h2' color='teal'> Contact me </Header>
                <p>
                    <Image src={LinkedIn} size='mini' spaced />
                    <a href="https://www.linkedin.com/in/sage-jordan" target="_blank">
                        LinkedIn
                    </a>
                </p>
                <p>
                    <Image src={GitHub} size='mini' spaced />
                    <a href="https://github.com/sage-jordan" target="_blank">
                        Github
                    </a>
                </p>
                <p>
                    <Image src={Gmail} size='mini' spaced />
                    <a href="mailto:sagemjordan@gmail.com" target="_blank">
                        Email
                    </a>
                </p>
                <Image src={programmer} />
            </Segment>
        </Container>
    )
}

export default Projects;