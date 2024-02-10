import React from 'react'
import { Segment, Header, Icon, Button } from 'semantic-ui-react'
import resume from '../../assets/resume.pdf'


const Download = () => {

    // Project strings
    const project1 = "Worked with a team of 7 in Lambda Labs, a 16-week project developed with a ReactJS front-end, NodeJS/Express server, and PostgreSQL/Knex database. We utilized Notion to organize our Product Vision Document, and Trello to manage our daily and weekly goals."
    const project2 = "Check out my "
    
    return(
        <Segment>
            <Header as='h2' color='teal'>Download Resume</Header>
            <Button basic color='teal' href={resume} download>
                <Icon name='code' />
                Sage's Resume
            </Button>
        </Segment>
    )
}

export default Download