import React from 'react';
import { Container, Segment, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProjectData from './ProjectData';

const Projects = () => {


    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Card.Group centered >
                    {ProjectData.map(({ id, image, header, meta, description, extra }) => {
                        console.log(id)
                        return (
                            <Card
                                as={< Link props={id} />}
                                to={`/${id}`}
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