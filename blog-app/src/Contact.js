import React from 'react';
import { Container, Segment, Image, Header } from 'semantic-ui-react';
import programmer from './assets/teal/undraw_programmer.png'

const Projects = () => {
    return (
        <Container>
            <Segment>
                <Header as='h2' color='teal'> Contact  page is coming soon! </Header>
                <Image src={programmer} />
            </Segment>
        </Container>
    )
}

export default Projects;