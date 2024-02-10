import React from 'react'
import { Segment, Header, Icon } from 'semantic-ui-react'


const Education = () => {
    return(
        <div>
            <Header as='h2' color='teal'>
                Education
            </Header>
            <Segment color='' textAlign='left'>
                <Header as='h3' color='teal' textAlign='center'>
                    Full Stack Web Development
                </Header>
                <Header as='h5' textAlign='center'>Lambda School is a 9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum</Header>
                <Header as='h5' textAlign='center'>Aug. 2019 - Aug. 2020</Header>
                <p><Icon name='star' color='teal' />Crafted innovative user experiences for diverse web and mobile platforms, encompassing the entire process from ideation and wireframing to final production</p>
                <p><Icon name='star' color='teal' />Successfully tackled coding challenges independently and collaboratively through pair programming</p>
                <p><Icon name='star' color='teal' />Applied Agile software development principles and adhered to Git workflow for all module projects and sprint challenges </p>
                <p><Icon name='star' color='teal' /> Managed server hosting, routing, and conducted comprehensive testing to ensure robust system functionality</p>
            </Segment>
        </div>
    )
}

export default Education