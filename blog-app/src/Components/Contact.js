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
                    <a href="https://www.linkedin.com/in/sage-jordan" target="_blank" style={{ color: 'black' }}>
                        <Image src={LinkedIn} size='mini' spaced />
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a href="https://github.com/sage-jordan" target="_blank" style={{ color: 'black' }}>
                        <Image src={GitHub} size='mini' spaced />
                        Github
                    </a>
                </p>
                <p>
                    <a href="mailto:sagemjordan@gmail.com" target="_blank" style={{ color: 'black' }}>
                        <Image src={Gmail} size='mini' spaced style={{ color: 'black' }} />
                        Email
                    </a>
                </p>
                <Image src={programmer} />
            </Segment>
        </Container>
    )
}

export default Projects;