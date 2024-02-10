import React from 'react'
import { Segment, Header } from 'semantic-ui-react'


const TechnicalSkills = () => {
    return(
        <div>
            <Header as='h2' color='teal'>
                Technical Skills
            </Header>
            <Segment textAlign='left'>
                <p><strong>Languages:</strong> JS, TS, Golang, PHP, Python, HTML, CSS</p>
                <p><strong>Libraries:</strong> ReactJS, NodeJS, Redux, JQuery, Axios, SCSS, LESS</p>
                <p><strong>Databases:</strong> MySQL, PostgreSQL, Redis, MongoDB, DynamoDB</p>
                <p><strong>Documentation:</strong> Confluence, Notion, Postman</p>
                <p><strong>Other Tools:</strong> Trello, Jira, Notion, Kafka, DataDog</p>
            </Segment>
        </div>
    )
}

export default TechnicalSkills