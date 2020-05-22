import React from 'react';
import { Card, Container } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const ProjectPage = (id) => {
    const history = useHistory();
    return (
        <Container>
            <Segment color='teal' padded='very'>
                <Card
                    onClick={() => history.goBack()}
                    color='teal'
                    image={sage}
                    header='Template Portfolio'
                    meta={(<a href='https://github.com/sage-jordan/portfolio-website/tree/master'>GitHub Repository</a>)}
                    description='My previous portfolio was made as a project in Lambda School, where they showed us how to explore a template and incorporate and publish my own changes.'
                    extra={<a href='sage-jordan.now.sh'>sage-jordan.now.sh</a>}
                />
            </Segment>
        </Container >
    )
}

export default ProjectPage;