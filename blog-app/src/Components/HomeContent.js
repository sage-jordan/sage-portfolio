// Import Dependencies & Components
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid, GridColumn, Header, Container, Responsive, Button, Icon } from 'semantic-ui-react';

// Import Images
import onlineResume from '../assets/teal/undraw_online_resume.png';
import journey from '../assets/teal/undraw_journey.png';
import escaping from '../assets/teal/undraw_escaping.png';


const HomeContent = () => {
    const welcome = "This is a ReactJS Application, styled with Semantic-UI. Growth is my passion; the tech industry empowers and challenges me to do that. At Lambda School I learned to solve problems, and make meaningful contributions to an agile team. To know more about what I'm learning, please navigate over to my "

    const myJourney = "I grew up with a big family in California. We moved throughout Orange County, but Huntington Beach is my hometown. I live in Corona, CA."

    const hobbies = "I enjoy yoga, hiking, video games, and philosophy. I value integrity, growth mindset, and kindness. To learn more about me, visit my "

    return (
        <div>
            {/* Desktop */}
            <Responsive minWidth={768} >
                <Segment color=''>
                    <Grid divided columns={2} stackable >
                        <GridColumn>
                            <Image src={onlineResume} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='' padded='very'>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        Welcome to my portfolio!
                                    </Header>
                                    <p>{welcome}
                                        <Button compact basic color='teal' size='mini' as={Link} to="/resume">
                                            <Icon name='address card outline' />
                                            Resume
                                        </Button>
                                    </p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                    <Grid divided columns={2} stackable>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='' padded='very'>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        This is my journey
                                    </Header>
                                    <p>{myJourney}</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                        <GridColumn>
                            <Image src={journey} />
                        </GridColumn>
                    </Grid>
                    <Grid divided columns={2} stackable>
                        <GridColumn>
                            <Image src={escaping} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='' padded='very'>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        Hobbies
                                    </Header>
                                    <p>{hobbies}
                                        <Button compact basic color='teal' size='mini' as={Link} to={{ pathname: "https://tackle.atlassian.net/wiki/spaces/sage/pages/555057932/Sage+s+Readme?atlOrigin=eyJpIjoiNzg1ZjM1ODY5NDRkNGVjMWE3N2EyOGIyMmFlYTU4ZDciLCJwIjoiYyJ9" }} target="_blank">
                                            <Icon name='address card outline' />
                                            ReadMe
                                        </Button>
                                    </p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                </Segment>
            </Responsive >

            {/* Mobile */}
            <Responsive maxWidth={768}>
                <Segment color='' id='top-margin'>
                    <Grid divided columns={2} stackable >
                        <GridColumn>
                            <Image src={onlineResume} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment color=''>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        Welcome to my portfolio!
                                    </Header>
                                    <p>{welcome}
                                        <Button compact basic color='teal' size='mini' as={Link} to="/resume">
                                            <Icon name='address card outline' />
                                            Resume
                                        </Button>
                                    </p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                    <Grid divided columns={2} stackable>
                        <GridColumn>
                            <Image src={journey} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment color='' >
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        This is my journey
                                    </Header>
                                    <p>{myJourney}</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                    <Grid divided columns={2} stackable>
                        <GridColumn>
                            <Image src={escaping} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment color=''>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        Hobbies
                                    </Header>
                                    <p>{hobbies}</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                </Segment>
            </Responsive>
        </div >
    )
}

export default HomeContent;