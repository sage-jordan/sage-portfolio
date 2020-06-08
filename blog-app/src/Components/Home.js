// Import Dependencies & Components
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid, GridColumn, Header, Container, Responsive } from 'semantic-ui-react';
import Projects from './Projects';

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
                            <Container textAlign="justified">
                                <Header as='h2' color='teal'>
                                    Welcome to my portfolio!
                                </Header>
                                This is a React Application, styled with Semantic-UI. Growing up, computers have always fascinated and challenged me. Learning
                                how to program has been one of the most fulfilling times of my life! To learn more about the languages I know or am learning,
                                please navigate over to my <Link to="/resume">Resume</Link> page!
                            </Container>
                        </Segment>
                    </GridColumn>
                </Grid>
                <Responsive minWidth={768}>
                    <Grid divided columns={2} stackable>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='teal' padded='very'>
                                <Container textAlign="justified">
                                    <Header as='h2' color='teal'>
                                        This is my journey
                                    </Header>
                                    I grew up in California, where I grew up with my mom, brother, and sister. We moved through lots of cities, but Huntington Beach was the one I
                                    came to call home. One of the biggest decisions of my life was to move to Indiana to be with my fiance, who I met online while playing video games.
                                    We both worked full time in the restaurant industry to purchase the home we now live in.
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
                                <Container textAlign="justified">
                                    <Header as='h2' color='teal'>
                                        This is my journey
                                    </Header>
                                    I grew up in California, where I grew up with my mom, brother, and sister. We moved through lots of cities, but Huntington Beach was the one I
                                    came to call home. One of the biggest decisions of my life was to move to Indiana to be with my fiance, who I met online while playing video games.
                                    We both worked full time in the restaurant industry to purchase the home we now live in.
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
                            <Container textAlign="justified">
                                <Header as='h2' color='teal'>
                                    Hobbies
                                </Header>
                                I take great pride in being efficient and productive in every aspect of my life! I have a young garden in our back yard where I
                                grow cucumbers, spices, and even make my own compost. My fiance and I have invested in a home gym and a healthy diet; we build our
                                health and strength whenever possible. In our down time, we enjoy playing League of Legends (the video game that we met on)!
                            </Container>
                        </Segment>
                    </GridColumn>
                </Grid>
            </Segment>
            <Projects />
        </Container >
    )
}

export default Home;