import React from 'react';
import { Container, Segment, Header, Card } from 'semantic-ui-react';
import ProjectData from './ProjectData';

const Featured = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Header as='h2' color='teal'>
                    Featured Projects
                </Header>
                <Card.Group centered >
                    {ProjectData.map(({ featured, image, header, meta, description, extra }) => {
                        if (featured) {
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
                        }
                    })}
                </Card.Group>
            </Segment>
        </Container >
    )
}

export default Featured;