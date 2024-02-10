import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

import experienceData from '../../assets/experience.js'


const Experience = () => {

    // Experience Display
    const parseExperience = function (experience) {
        const display = experience.map(job => {
            const bullets = job.bullets.map(bullet => (
                <p><Icon name='star' color='teal' />{bullet}</p>
            ))
            return (
                <Segment color='' textAlign='left'>
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

    return(
        <div>
            <Header as='h2' color='teal'>Experience</Header>
            {parseExperience(experienceData)}
        </div>
    )
}

export default Experience