// Import Dependencies & Components
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid, GridColumn, Header, Container, Responsive } from 'semantic-ui-react';
import Featured from './Featured';

// Import Images
import onlineResume from '../assets/teal/undraw_online_resume.png';
import journey from '../assets/teal/undraw_journey.png';
import escaping from '../assets/teal/undraw_escaping.png';


const Home = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Grid divided columns={2} stackable >
                    <GridColumn>
                        <Image src={onlineResume} />
                    </GridColumn>
                    <GridColumn verticalAlign='middle'>
                        <Segment color='teal' padded='very'>
                            <Container textAlign="left">
                                <Header as='h2' color='teal'>
                                    Welcome to my portfolio!
                                </Header>
                                <p>This is a React Application, styled with Semantic-UI. Growing up, computers have always fascinated and challenged me. Learning
                                    how to program has been the most fulfilling career choice! To learn more about the languages I know or am learning,
                                    please navigate over to my <Link to="/resume">Resume</Link> page!</p>
                            </Container>
                        </Segment>
                    </GridColumn>
                </Grid>
                <Responsive minWidth={768}>
                    <Grid divided columns={2} stackable>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='teal' padded='very'>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        This is my journey
                                    </Header>
                                    <p>I grew up in California where I lived with my mom, brother, and sister. We moved through lots of cities, but Huntington Beach was the one I
                                        came to call home. One of the biggest decisions of my life was to move out of state, and I'm currently residing in Houston, TX.</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                        <GridColumn>
                            <Image src={journey} />
                        </GridColumn>
                    </Grid>
                </Responsive>
                <Responsive maxWidth={768}>
                    <Grid divided columns={2} stackable>
                        <GridColumn>
                            <Image src={journey} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='teal' padded='very'>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        This is my journey
                                    </Header>
                                    <p>I grew up in California where I lived with my mom, brother, and sister. We moved through lots of cities, but Huntington Beach was the one I
                                        came to call home. One of the biggest decisions of my life was to move out of state, and I'm currently residing in Houston, TX.</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                </Responsive>

                <Grid divided columns={2} stackable>
                    <GridColumn>
                        <Image src={escaping} />
                    </GridColumn>
                    <GridColumn verticalAlign='middle'>
                        <Segment color='teal' padded='very'>
                            <Container textAlign="left">
                                <Header as='h2' color='teal'>
                                    Hobbies
                                </Header>
                                <p>I enjoy physical health, coding, video games, and philosophy. I value integrity, growth mindset, and kindness.</p>
                            </Container>
                        </Segment>
                    </GridColumn>
                </Grid>
            </Segment>
            <Featured />
        </Container >
    )
}

export default Home;