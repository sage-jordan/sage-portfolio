import React from 'react';
import { Segment, Image, Grid, GridColumn, Header, Container } from 'semantic-ui-react';
import onlineResume from './assets/teal/undraw_online_resume.png';
import journey from './assets/teal/undraw_journey.png';
import escaping from './assets/teal/undraw_escaping.png';


const Home = () => {
    return (
        <Segment color='teal' padded='very'>
            <Grid divided columns={2} stackable >
                <GridColumn>
                    <Image src={onlineResume} />
                </GridColumn>
                <GridColumn verticalAlign='middle'>
                    <Segment color='teal' padded='very'>
                        <Container>
                            <Header as='h2' color='teal'>
                                Welcome to my portfolio!
                            </Header>
                            This is a simple React App, styled with Semantic-UI. Growing up, computers have always been a foreign concept to me. Learning
                            how to program them has been one of the most fulfilling times of my life!
                        </Container>
                    </Segment>
                </GridColumn>
            </Grid>
            <Grid divided columns={2} stackable>
                <GridColumn verticalAlign='middle'>
                    <Segment color='teal' padded='very'>

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
                    <Segment color='teal' padded='very'>

                    </Segment>
                </GridColumn>
            </Grid>
        </Segment>
    )
}

export default Home;