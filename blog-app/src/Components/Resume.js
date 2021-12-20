import React from 'react'
import { Segment, Container, Header, Icon, Grid, Divider, Responsive, Image, GridColumn, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GitHub from '../assets/icons/GitHub-Mark.png'
import LinkedIn from '../assets/icons/LinkedIn.png'
import Gmail from '../assets/icons/Gmail.png'
import img from '../assets/teal/undraw_weather.png'
import skillData from '../assets/skillArr'
import ReactHtmlParser from 'react-html-parser'
import experienceData from '../assets/experience.js'
const columns = 2

const Resume = () => {

    // Skills Grid Function
    const makeGrid = function (columns, skillArr) {
        let str = "<div class='ui relaxed stackable rounded grid'>"
        for (let n = 0; n < skillArr.length; n++) {
            if ((n + 1) === skillArr.length) {
                str += `<div class='ui column teal'>${skillArr[n]}</div></div></div>`
            } else if (n === 0 || !(n % columns)) {
                str += `<div class='two column row'><div class='ui column'>${skillArr[n]}</div>`
            } else if (!((n + 1) % columns)) {
                str += `<div class='ui column teal'>${skillArr[n]}</div></div>`
            } else {
                str += `<div class='ui column teal'>${skillArr[n]}</div>`
            }
        }
        return ReactHtmlParser([str])
    }

    // Experience Display
    const parseExperience = function (experience) {
        const display = experience.map(job => {
            const bullets = job.bullets.map(bullet => (
                <p><Icon name='star' color='teal' />{bullet}</p>
            ))
            return (
                <Segment color='teal' textAlign='left'>
                    <Header as='h3' color='teal' textAlign='center'>
                        {job.headline}
                    </Header>
                    <Header as='h5' textAlign='center'>{job.dates}</Header>
                    {bullets}
                </Segment>
            )
        });
        return display;
    }

    // Project strings
    const project1 = "Worked with a team of 7 in Lambda Labs, a 16-week project developed with a ReactJS front-end, NodeJS/Express server, and PostgreSQL/Knex database. We utilized Notion to organize our Product Vision Document, and Trello to manage our daily and weekly goals."
    const project2 = "Check out my "

    return (
        <Container>

            {/* Desktop */}
            <Responsive minWidth={768}>
                <Segment color='teal' padded='very'>
                    <Grid columns={2} relaxed='very' stackable>

                        {/* First Column */}
                        <Grid.Column>

                            {/* Bio */}
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
                                I thrive in a fast paced environment, which encourages me to challenge myself.
                                I put care into every commit, prioritize user experience, and take pride in completed documentation.
                            </Segment>

                            {/* Technical Skills */}
                            <Header as='h2' color='teal'>
                                Technical Skills
                            </Header>
                            {makeGrid(columns, skillData)}

                            {/* Skills */}
                            <Header as='h2' color='teal'>
                                Skills
                            </Header>
                            <Grid columns={2} stackable sretched>
                                <Grid.Column>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Agile Methodology</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Conflict Resolution</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Documentation Reporting</Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Remote work</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Project Management</Segment>
                                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />SCRUM</Segment>
                                </Grid.Column>
                            </Grid>

                            {/* Contact Info */}
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

                        {/* Second Column */}
                        <Grid.Column verticalAlign='middle'>

                            {/* Education */}
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

                            {/* Experience */}
                            <Header as='h2' color='teal'>Experience</Header>
                            {parseExperience(experienceData)}

                            {/* Projects */}
                            <Header as='h2' color='teal'>
                                Projects
                            </Header>
                            <Segment color='teal' textAlign='left'>
                                <p><Icon name='star' color='teal' />{project1}</p>
                                <p><Icon name='star' color='teal' />{project2}
                                    <Button basic color='teal' as={Link} to="/projects">
                                        <Icon name='code' />
                                        Projects
                                    </Button>
                                </p>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                    <Responsive as={Divider} vertical minWidth={768}>
                        <Icon name='snowflake' color='teal' />
                    </Responsive>
                </Segment>
            </Responsive>

            {/* Mobile */}
            <Responsive maxWidth={768}  >

                {/* Bio */}
                <Segment color='teal' id='top-margin'>
                    <Header as='h2' color='teal'>
                        Sage Jordan
                    </Header>
                    <Responsive as={Divider} horizontal maxWidth={768}>
                        <Icon name='snowflake' color='teal' />
                    </Responsive>
                    <Segment color='teal' compact>
                        <Header as='h5' textAlign='center'>
                            Full Stack Engineer
                        </Header>
                        <Divider color='teal' />
                        Efficient and detail-oriented problem solver located in Houston, TX.
                        I thrive in a fast paced environment, which encourages me to challenge myself.
                        I put care into every commit, prioritize user experience, and take pride in completed documentation.
                    </Segment>
                </Segment>

                {/* Technical Skills */}
                <Segment color='teal'>
                    <Header as='h2' color='teal'>
                        Technical Skills
                    </Header>
                    {makeGrid(columns, skillData)}
                </Segment>

                {/* Skills */}
                <Segment color='teal' >
                    <Header as='h2' color='teal'>
                        Skills
                    </Header>
                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Agile Methodology</Segment>
                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Conflict Resolution</Segment>
                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Documentation Reporting</Segment>
                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Remote work</Segment>
                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />Project Management</Segment>
                    <Segment color='teal' textAlign='left'><Icon name='star' color='teal' />SCRUM</Segment>
                </Segment>

                {/* Education */}
                <Segment color='teal'>
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
                </Segment>

                {/* Experience */}
                <Segment color='teal'>
                    <Header as='h2' color='teal'>Experience</Header>
                    {parseExperience(experienceData)}
                </Segment>

                {/* Projects */}
                <Segment color='teal'>
                    <Header as='h2' color='teal'>
                        Projects
                    </Header>
                    <Segment color='teal' textAlign='left'>
                        <p><Icon name='star' color='teal' />{project1}</p>
                        <p><Icon name='star' color='teal' />{project2}
                            <Button basic size='mini' color='teal' as={Link} to="/projects">
                                <Icon name='code' />
                                Projects
                            </Button>
                        </p>
                    </Segment>
                </Segment>


                {/* Contact Info */}
                <Segment color='teal'>
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
                </Segment>
            </Responsive >
        </Container >
    )
};

export default Resume;