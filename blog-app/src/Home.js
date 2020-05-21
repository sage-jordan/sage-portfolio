import React from 'react';
import { Header, Button, Icon, Segment, Grid, Divider, Image, Responsive, SegmentGroup, Container } from 'semantic-ui-react'


const Home = () => {

    return (
        <Container>
            <Segment color='violet' padded='very'>
                <Grid divided>
                    <Grid columns={3} relaxed='very' stackable>
                        <Grid.Column>
                            <Header color='teal' floated='left'>My Story</Header>
                            <Segment floated='left' textAlign='left' color='violet'>
                                I'm from Huntington Beach, CA, where I grew up with my family.
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            2nd column
                        </Grid.Column>
                        <Grid.Column>
                            3rd column
                        </Grid.Column>
                    </Grid>
                </Grid>
            </Segment>
        </Container >
    )
};

export default Home;