import React from 'react'
import { Segment, Header, Icon, Divider, Responsive } from 'semantic-ui-react'


const Bio = () => {
    return(
        <div>
            <Header as='h2' color='teal'>
                Sage Jordan
            </Header>
            <Responsive as={Divider} horizontal maxWidth={768}>
                <Icon name='snowflake' color='teal' />
            </Responsive>
            <Segment color=''>
                <Header as='h5' textAlign='center'>
                    Full Stack Engineer
                </Header>
                <Divider color='teal' />
                Efficient and growth oriented problem solver with 3+ years of agile software development experience. 
                I prioritize challenging myself to learn and take ownership.
            </Segment>
        </div>
    )
}

export default Bio