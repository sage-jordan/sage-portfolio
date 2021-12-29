import React from 'react';
import { Container, Segment, Card, Responsive } from 'semantic-ui-react';
import ProjectData from '../assets/ProjectData.js';

const Projects = () => {
    return (
        <Container>

            {/* Desktop */}
            <Responsive minWidth={768} >
                <Segment color='' padded=' very' >
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
            </Responsive>

            {/* Mobile */}
            <Responsive maxWidth={768} >
                <Segment color='' id=' top-margin'>
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
            </Responsive >
        </Container >
    )
}

export default Projects;