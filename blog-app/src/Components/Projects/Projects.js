import React from 'react';
import { Card, Container, Segment, Image, Header } from 'semantic-ui-react';
import organizer from '../../assets/teal/undraw_online_organizer.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Card
                    image={organizer}
                    header='Template Portfolio'
                    meta={<a href='https://html5up.net/'>HTML5UP</a>}
                    description='My previous portfolio was made as a project in Lambda School, where they showed us how to explore a template and incorporate and publish my own changes.'
                    extra={<a href='sage-jordan.now.sh'>sage-jordan.now.sh</a>}
                />
            </Segment>
        </Container >
    )
}

export default Projects;