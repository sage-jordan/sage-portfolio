import React from 'react'
import { Segment, Header, Grid, GridColumn, Image } from 'semantic-ui-react'
import GitHub from '../../assets/icons/GitHub-Mark.png'
import LinkedIn from '../../assets/icons/LinkedIn.png'
import Gmail from '../../assets/icons/Gmail.png'
import img from '../../assets/teal/undraw_weather.png'


const Contact = () => {
    return(
        <div>
            <Header as='h2' color='teal'>
                Contact Info
            </Header>
            <Segment color='' textAlign='center'>
                <Grid textAlign='left' columns={2}>
                    <GridColumn>
                        <p>
                            <a href="https://sage-portfolio.now.sh/" target="_blank" rel="noopener noreferrer" style={{
                                color: 'teal'
                            }}>
                                <Image src={img} size='mini' spaced />
                                Portfolio
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/sage-jordan" target="_blank" rel="noopener noreferrer" style={{
                                color: 'teal'
                            }}>
                                <Image src={GitHub} size='mini' spaced />
                                Github
                            </a>
                        </p>
                    </GridColumn>
                    <GridColumn>
                        <p>
                            <a href="mailto:sagemjordan@gmail.com" target="_blank" rel="noopener noreferrer" style={{
                                color: 'teal'
                            }}>
                                <Image src={Gmail} size='mini' spaced />
                                Email
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/sage-jordan" target="_blank" rel="noopener noreferrer" style={{
                                color: 'teal'
                            }}>
                                <Image src={LinkedIn} size='mini' spaced />
                                LinkedIn
                            </a>
                        </p>
                    </GridColumn>
                </Grid>
            </Segment>
        </div>
    )
}

export default Contact