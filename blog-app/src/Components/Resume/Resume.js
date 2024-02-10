import React from 'react'
import { Segment, Container, Icon, Grid, Divider, Responsive } from 'semantic-ui-react'
import Bio from './Bio.js'
import TechnicalSkills from './TechnicalSkills.js'
import Education from './Education.js'
import Experience from './Experience.js'
import Projects from './Projects.js'
import Contact from './Contact.js'
import Download from './Download.js'

const Resume = () => {
    

    return (
        <Container>

            <Responsive minWidth={768}>
                {/* Desktop */}
                <Segment color='' padded='very'>
                    <Grid columns={2} relaxed='very' stackable>

                        <Grid.Column>
                            {/* First Column */}
                            <Bio/>
                            <TechnicalSkills/>
                            <Education/>
                            <Contact/>
                            <Download/>
                        </Grid.Column>

                        <Grid.Column verticalAlign='middle'>
                            {/* Second Column */}
                            <Experience/>
                            <Projects/>    
                        </Grid.Column>
                    </Grid >

                    <Responsive as={Divider} vertical minWidth={768}>
                        <Icon name='snowflake' color='teal' />
                    </Responsive>
                </Segment >
            </Responsive >

            < Responsive maxWidth={768} >
                {/* Mobile */}
                <Segment color='' id='top-margin' >
                    <Bio/>
                </Segment>

                < Segment color='' >
                    <TechnicalSkills/>
                </Segment >

                < Segment color='' >
                    <Education/>
                </Segment >

                < Segment color='' >
                    <Experience/>
                </Segment >

                < Segment color='' >
                    <Projects/> 
                </Segment >
                
                < Segment color='' >
                    <Contact/>
                </Segment >

                <Download/>
            </Responsive >
        </Container >
    )
};

export default Resume;