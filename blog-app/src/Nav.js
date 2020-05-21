import React from 'react';
import { Header, Button, Icon, Segment, Grid, Divider } from 'semantic-ui-react'

const Nav = () => {
    return (
        <Segment color='teal' padded='very'>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Header as='h2' color='teal'>
                        <Image src={headshot} />
                        Sage Jordan
                    </Header>
                </Grid.Column>
                <Grid columns={3} verticalAlign='middle'>
                    <Grid.Column>
                        <Button basic color='teal'>
                            <Icon name='home' color='teal' />
                            Home
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button basic color='teal'>
                            <Icon name='address card outline' />
                            About
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button basic color='teal'>
                            <Icon name='code' />
                            Projects
                        </Button>
                    </Grid.Column>
                </Grid>
            </Grid>

            <Divider vertical>
                <Icon name='snowflake' color='teal' />
            </Divider>
        </Segment>
    )
}

export default Nav;