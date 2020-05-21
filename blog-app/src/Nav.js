import React from 'react';
import { Container, Header, Button, Icon, Segment, Grid, Divider, Image, Responsive } from 'semantic-ui-react'
import img from './assets/teal/undraw_weather.png'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Grid columns={2} stretched relaxed='very' stackable>
                    <Grid.Column>
                        <Header as='h2' color='teal'>
                            <Image src={img} size='massive' />
                            Sage Jordan
                        </Header>
                        <Responsive as={Divider} horizontal maxWidth={768}>
                            <Icon name='snowflake' color='teal' />
                        </Responsive>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle'>
                        <Header as='h3' color='teal'>
                            <Icon name='terminal' size='big' />
                            Full Stack Web Developer
                        </Header>
                    </Grid.Column>
                    <Grid.Row >
                        <Grid.Column width={4}>
                            <Button basic color='teal' as={Link} to="/">
                                <Icon name='home' color='teal' />
                                Home
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button basic color='teal' as={Link} to="/resume">
                                <Icon name='address card outline' />
                                Resume
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button basic color='teal' as={Link} to="/projects">
                                <Icon name='code' />
                                Projects
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button basic color='teal' as={Link} to="/contact">
                                <Icon name='phone' />
                                Contact
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Responsive as={Divider} vertical minWidth={768}>
                    <Icon name='snowflake' color='teal' />
                </Responsive>
            </Segment>
        </Container >
    )
}

export default Nav;