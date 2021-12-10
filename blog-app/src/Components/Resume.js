import React from 'react';
import { Segment, Container, Header, Icon, Grid, Divider, Responsive, Image, GridColumn, GridRow } from 'semantic-ui-react';
import GitHub from '../assets/icons/GitHub-Mark.png';
import LinkedIn from '../assets/icons/LinkedIn.png';
import Gmail from '../assets/icons/Gmail.png';
import img from '../assets/teal/undraw_weather.png'

const Resume = () => {
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Segment color='teal'>
                    <Grid columns={2} stretched relaxed='very' stackable>
                        <Grid.Column>
                            <Header as='h2' color='teal'>
                                Sage Jordan
                            </Header>
                            <Responsive as={Divider} horizontal maxWidth={768}>
                                <Icon name='snowflake' color='teal' />
                            </Responsive>
                            <Segment color='teal'>
                                <Header as='h5' textAlign='center'>
                                    Full Stack Engineer
                                </Header>
                                <Divider color='teal' />
                                Efficient and detail-oriented problem solver located in Houston, TX.
                                I am a fast-paced self-learner, constantly challenging myself to push ahead.
                                I care about every commit, and take pride in my documentation.
                            </Segment>
                            <Header as='h2' color='teal'>
                                Technical Skills
                            </Header>
                            <Grid columns={4}>
                                {/* # TODO: needs updated to be more efficient */}
                                <GridColumn>
                                    <Segment color='teal'>
                                        Python
                                    </Segment>
                                    <Segment color='teal'>
                                        Redux
                                    </Segment>
                                    <Segment color='teal'>
                                        CSS
                                    </Segment>
                                    <Segment color='teal'>
                                        SASS
                                    </Segment>
                                    <Segment color='teal'>
                                        LESS
                                    </Segment>
                                </GridColumn>
                                <GridColumn>
                                    <Segment color='teal'>
                                        JavaScript
                                    </Segment>
                                    <Segment color='teal'>
                                        ReactJS
                                    </Segment>
                                    <Segment color='teal'>
                                        NodeJS
                                    </Segment>
                                    <Segment color='teal'>
                                        PHP
                                    </Segment>
                                    <Segment color='teal'>
                                        HTML
                                    </Segment>
                                </GridColumn>
                                <GridColumn>
                                    <Segment color='teal'>
                                        Salesforce
                                    </Segment>
                                    <Segment color='teal'>
                                        MySQL
                                    </Segment>
                                    <Segment color='teal'>
                                        PostgreSQL
                                    </Segment>
                                    <Segment color='teal'>
                                        Redis
                                    </Segment>
                                    <Segment color='teal'>
                                        Trello, Jira
                                    </Segment>
                                </GridColumn>
                                <GridColumn>
                                    <Segment color='teal'>
                                        Docker
                                    </Segment>
                                    <Segment color='teal'>
                                        BitBucket
                                    </Segment>
                                    <Segment color='teal'>
                                        GitHub
                                    </Segment>
                                    <Segment color='teal'>
                                        Git
                                    </Segment>
                                    <Segment color='teal'>
                                        Kafka
                                    </Segment>
                                </GridColumn>
                            </Grid>
                            <Header as='h2' color='teal'>
                                Skills
                            </Header>
                            <Grid columns={2} stretched>
                                <Grid.Column>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Agile Methodology</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Conflict Resolution</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Documentation/Reporting</Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Remote work</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Project Management</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />SCRUM</Segment>
                                </Grid.Column>
                            </Grid>
                            <Header as='h2' color='teal'>
                                Contact Info
                            </Header>
                            <Segment color='teal' textAlign='center'>
                                <Grid textAlign='left' columns={2}>
                                    <GridColumn>
                                        <p>
                                            <a href="https://sage-portfolio.now.sh/" target="_blank" style={{ color: 'black' }}>
                                                <Image src={img} size='mini' spaced />
                                                Portfolio
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://github.com/sage-jordan" target="_blank" style={{ color: 'black' }}>
                                                <Image src={GitHub} size='mini' spaced />
                                                Github
                                            </a>
                                        </p>
                                    </GridColumn>
                                    <GridColumn>
                                        <p>
                                            <a href="mailto:sagemjordan@gmail.com" target="_blank" style={{ color: 'black' }}>
                                                <Image src={Gmail} size='mini' spaced />
                                                Email
                                            </a>
                                        </p>
                                        <p>
                                            <a href="https://www.linkedin.com/in/sage-jordan" target="_blank" style={{ color: 'black' }}>
                                                <Image src={LinkedIn} size='mini' spaced />
                                                LinkedIn
                                            </a>
                                        </p>
                                    </GridColumn>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                            <Header as='h2' color='teal'>
                                Education
                            </Header>
                            <Segment color='teal' textAlign='left'>
                                <Header as='h3' color='teal' textAlign='center'>
                                    Full Stack Web Development
                                </Header>
                                <Header as='h5' textAlign='center'>Lambda School is a 9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum</Header>
                                <Header as='h5' textAlign='center'>Aug. 2019 - Aug. 2020</Header>
                                <p><Icon name='star' color='teal' />Approached coding challenges using pair programming</p>
                                <p><Icon name='star' color='teal' />Utilized agile software development and Git workflow on all module projects and sprint challenges</p>
                                <p><Icon name='star' color='teal' />Gained hands-on experience with client and server hosting, routing, and testing</p>
                                <p><Icon name='star' color='teal' />Designed original user experiences across a range of web and mobile platforms, from ideation, to wireframing, to final production</p>
                            </Segment>
                            <Header as='h2' color='teal'>
                                Experience
                            </Header>
                            <Segment color='teal' textAlign='left'>
                                <Header as='h3' color='teal' textAlign='center'>
                                    Software Engineer II at Sharpen
                                </Header>
                                <Header as='h5' textAlign='center'>Aug. 2020 - Sept. 2021</Header>
                                <p><Icon name='star' color='teal' />Develop remotely with an agile team to debug, create, and test production-level code</p>
                                <p><Icon name='star' color='teal' />Program with a user-first mentality</p>
                            </Segment>
                            <Segment color='teal' textAlign='left'>
                                <Header as='h3' color='teal' textAlign='center'>
                                    Team Lead at Lambda School
                                </Header>
                                <Header as='h5' textAlign='center'>Nov. 2019 - Aug. 2020</Header>
                                <p><Icon name='star' color='teal' />Led a team of 9 students that emulates a real work environment using Agile methodology</p>
                                <p><Icon name='star' color='teal' />Reviewed student code to provide daily feedback and one-on-one code reviews</p>
                                <p><Icon name='star' color='teal' />Troubleshooting of web curriculum through slack help channel or code review</p>
                                <p><Icon name='star' color='teal' />Progressively delivered supplemental lectures on various topics related to software engineering</p>
                            </Segment>
                            <Header as='h2' color='teal'>
                                Projects
                            </Header>
                            <Segment color='teal' textAlign='left'>
                                <p><Icon name='star' color='teal' />Worked with a team of 7 in Lambda Labs, a 16-week project developed with a ReactJS front-end, NodeJS/Express server, and PostgreSQL/Knex database. We utilized Notion to organize our Product Vision Document, and Trello to manage our daily and weekly goals. </p>
                            </Segment>
                        </Grid.Column>

                    </Grid>
                    <Responsive as={Divider} vertical minWidth={768}>
                        <Icon name='snowflake' color='teal' />
                    </Responsive>
                    {/* <Image src={pdf} centered /> */}
                </Segment>
            </Segment>
        </Container >
    )
};

export default Resume;