import React from 'react';
import { Header, Button, Icon, Segment, Grid, Divider, Image, Responsive } from 'semantic-ui-react'

const Nav = () => {
    return (
        <Segment color='teal' padded='very'>
            <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Header as='h2' color='teal'>
                        <Image circular src='https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/99425826_2711986479077934_5779544135094501376_n.jpg?_nc_cat=100&_nc_sid=730e14&_nc_oc=AQlsCvYgyQeFkzwd4IIVjELfvHFlNNAdUDY9xJ3dEBGCuFm-g0g4KugbSg7MGwKeSRxUYdZkoQ0Z-jItLZPfrwKr&_nc_ht=scontent-ort2-2.xx&oh=0690c542b78842dc7e1532dd6dbef624&oe=5EED583A' />
                        Sage Jordan
                    </Header>
                </Grid.Column>
                <Grid columns={3} verticalAlign='middle' stackable>
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
            <Responsive as={Divider} horizontal maxWidth={768}>
                <Icon name='snowflake' color='teal' />
            </Responsive>
            <Responsive as={Divider} vertical minWidth={768}>
                <Icon name='snowflake' color='teal' />
            </Responsive>
        </Segment>
    )
}

export default Nav;