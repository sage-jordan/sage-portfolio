// Import Dependencies & Components
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid, GridColumn, Header, Container, Responsive, Button, Icon } from 'semantic-ui-react';

// Import Images
import onlineResume from '../../assets/teal/undraw_online_resume.png';
import journey from '../../assets/teal/undraw_journey.png';
import escaping from '../../assets/teal/undraw_escaping.png';


const HomeContent = () => {
    const welcomeHeader = "Welcome to Sage's portfolio!"
    const welcome = "This is a ReactJS Application, styled with Semantic-UI. Check out the code <a to='https://github.com/sage-jordan/sage-portfolio'>here</a>. Growth is my passion; the tech industry empowers and challenges me to do just that. At Lambda School I learned to solve problems, and make meaningful contributions to an agile team. To know more about what I'm learning, please navigate over to my "

    const myJourneyHeader = 'This is my journey'
    const myJourney = "I live with my big family in Southern California. After high school I attended Lambda School, an online technical school, while working as a Gaucha (meat server) at a Brazilian Steak house."

    const hobbiesHeader = 'Hobbies'
    const hobbies = "I enjoy yoga, hiking, video games, and philosophy. I value integrity, growth mindset, and kindness."

    return (
        <div>
            {/* Desktop */}
            <Responsive minWidth={768}>
                <Segment >
                    <Grid divided columns={2} stackable >
                        <GridColumn>
                            <Image src={onlineResume} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment padded>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        {welcomeHeader}
                                    </Header>
                                    <p className='largetext'>
                                        This is a ReactJS Application, styled with Semantic-UI. Check out the code <a target="_blank" href='https://github.com/sage-jordan/sage-portfolio'>here</a>. Growth is my passion; the tech industry empowers and challenges me to do just that. After mastering the basics of Web Development at Lambda School, I have helped multiple SaaS companies to expand and optimize their application. To know more about what I'm learning, please navigate over to my <Button compact basic color='teal' size='mini' as={Link} to="/resume">
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
                            <Segment padded>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        {myJourneyHeader}
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
                            <Segment padded>
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        {hobbiesHeader}
                                    </Header>
                                    <p>{hobbies}</p>
                                </Container>
                            </Segment>
                        </GridColumn>
                    </Grid>
                </Segment>
            </Responsive >

            {/* Mobile */}
            <Responsive maxWidth={768}>
                <Segment  id='top-margin'>
                    <Grid divided columns={2} stackable >
                        <GridColumn>
                            <Image src={onlineResume} />
                        </GridColumn>
                        <GridColumn verticalAlign='middle'>
                            <Segment >
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        {welcomeHeader}
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
                            <Segment  >
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        {myJourneyHeader}
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
                            <Segment >
                                <Container textAlign="left">
                                    <Header as='h2' color='teal'>
                                        {hobbiesHeader}
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