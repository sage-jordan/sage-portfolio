import React from 'react';
import { Segment, Image, Container } from 'semantic-ui-react'
import pdf from '../assets/ResumePNG.png';

const Resume = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Segment color='teal'>
                    <Image src={pdf} fluid />
                </Segment>
            </Segment>
        </Container >
    )
};

export default Resume;