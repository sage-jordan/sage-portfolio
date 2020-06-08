import React from 'react';
import { Container, Segment, Card } from 'semantic-ui-react';
import ProjectData from './ProjectData';

const Projects = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Card.Group centered >
                    {ProjectData.map(({ image, header, meta, description, extra }) => {
                        return (
                            <Card
                                color='teal'
                                image={image}
                                header={header}
                                meta={meta}
                                description={description}
                                extra={extra}
                            />
                        )
                    })}
                </Card.Group>
            </Segment>
        </Container >
    )
}

export default Projects;