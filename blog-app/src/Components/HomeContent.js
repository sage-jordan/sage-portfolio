// Import Dependencies & Components
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid, GridColumn, Header, Container, Responsive, Button, Icon } from 'semantic-ui-react';

// Import Images
import onlineResume from '../assets/teal/undraw_online_resume.png';
import journey from '../assets/teal/undraw_journey.png';
import escaping from '../assets/teal/undraw_escaping.png';


const HomeContent = () => {
    const welcome = "This is a React Application, styled with Semantic-UI. Computers have always fascinated and challenged me. Learning\
    how to program has been the most fulfilling career choice! To learn more about the languages I know or am learning,\
    please navigate over to my "

    const myJourney = "I grew up in California where I lived with lots of family. We moved through lots of cities, but Huntington Beach was the one I\
    came to call home. One of the biggest decisions of my life was to move out of state, and I'm currently residing in Houston, TX."

    const hobbies = "In my free time I enjoy physical health, exploring new coding tools and ideas, video games, and philosophy. I value integrity,\
    growth mindset, and kindness."

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
                                    <p>{hobbies}</p>
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
                                    <p>{welcome}</p>
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