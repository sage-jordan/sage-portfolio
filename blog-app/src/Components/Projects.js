import React from 'react';
import { Container, Segment, Card } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import ProjectData from './ProjectData';

// // Import Images
// import sage from '../assets/proj/sage-jordan.png'
// import carSales from '../assets/proj/car-sales.png'
// import github from '../assets/proj/github-usercards.png'
// import shoppingCart from '../assets/proj/react-shopping-cart.png'
// import darkMode from '../assets/proj/dark-mode.png'
// import nasa from '../assets/proj/nasa-potd.png'

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