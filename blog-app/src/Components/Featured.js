import React from 'react';
import { Segment, Header, Card, Responsive } from 'semantic-ui-react';
import ProjectData from './ProjectData';

const Featured = () => {
    return (

        <div>
            {/* Desktop */}
            <Responsive minWidth={768} >
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
                            } else {
                                return null;
                            }
                        })}
                    </Card.Group>
                </Segment>
            </Responsive >

            {/* Mobile */}
            <Responsive maxWidth={768} >
                <Segment color='teal' id='top-margin'>
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
                            } else {
                                return null;
                            }
                        })}
                    </Card.Group>
                </Segment>
            </Responsive >
        </div >
    )
}

export default Featured;