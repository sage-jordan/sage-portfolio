import React from 'react';
import { Segment, Image, Container } from 'semantic-ui-react'
import pdf from '../assets/resume1.png';
import pdf2 from '../assets/resume2.png';

const Resume = () => {

    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Segment color='teal'>
                    <Image src={pdf} fluid />
                    <Image src={pdf2} fluid />
                </Segment>
            </Segment>
        </Container >
    )
};

export default Resume;