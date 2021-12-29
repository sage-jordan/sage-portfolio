import React from 'react';
import { Container, Segment, Image, Header, Responsive } from 'semantic-ui-react';
import programmer from '../assets/teal/undraw_programmer.png';
import GitHub from '../assets/icons/GitHub-Mark.png';
import LinkedIn from '../assets/icons/LinkedIn.png';
import Gmail from '../assets/icons/Gmail.png';

const Projects = () => {
    return (
        <Container>

            {/* Desktop */}
            <Responsive minWidth={768} >
                <Segment color=''>
                    <Header as='h2' color='teal'> Contact me </Header>
                    <p>
                        <a href="https://www.linkedin.com/in/sage-jordan" target="_blank" rel="noopener noreferrer" style={{ color: 'teal' }}>
                            <Image src={LinkedIn} size='mini' spaced />
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/sage-jordan" target="_blank" rel="noopener noreferrer" style={{ color: 'teal' }}>
                            <Image src={GitHub} size='mini' spaced />
                            Github
                        </a>
                    </p>
                    <p>
                        <a href="mailto:sagemjordan@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'teal' }}>
                            <Image src={Gmail} size='mini' spaced style={{ color: 'teal' }} />
                            Email
                        </a>
                    </p>
                    <Image src={programmer} />
                </Segment >
            </Responsive >

            {/* Mobile */}
            < Responsive maxWidth={768} >
                <Segment color='' id='top-margin'>
                    <Header as='h2' color='teal'> Contact me </Header>
                    <p>
                        <a href="https://www.linkedin.com/in/sage-jordan" target="_blank" rel="noopener noreferrer" style={{ color: 'teal' }}>
                            <Image src={LinkedIn} size='mini' spaced />
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/sage-jordan" target="_blank" rel="noopener noreferrer" style={{ color: 'teal' }}>
                            <Image src={GitHub} size='mini' spaced />
                            Github
                        </a>
                    </p >
                    <p>
                        <a href="mailto:sagemjordan@gmail.com" target="_blank" rel="noopener noreferrer" style={{
                            color: 'teal'
                        }}>
                            <Image src={Gmail} size='mini' spaced style={{
                                color: 'teal'
                            }} />
                            Email
                        </a>
                    </p >
                    <Image src={programmer} />
                </Segment >
            </Responsive >
        </Container >
    )
}

export default Projects;