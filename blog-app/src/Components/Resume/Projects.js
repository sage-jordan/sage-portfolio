import React from 'react'
import { Segment, Header, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Projects = () => {

    // Project strings
    const project1 = "Worked with a team of 7 in Lambda Labs, a 16-week project developed with a ReactJS front-end, NodeJS/Express server, and PostgreSQL/Knex database. We utilized Notion to organize our Product Vision Document, and Trello to manage our daily and weekly goals."
    const project2 = "Check out my "
    
    return(
        <div>
            <Header as='h2' color='teal'>
                Projects
            </Header>
            <Segment color='' textAlign='left'>
                <p><Icon name='star' color='teal' />{project1}</p>
                <p><Icon name='star' color='teal' />{project2}
                    <Button basic color='teal' as={Link} to="/projects">
                        <Icon name='code' />
                        Projects
                    </Button>
                </p>
            </Segment>
        </div>
    )
}

export default Projects