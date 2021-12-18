// Import Dependencies & Components
import React from 'react';
import Featured from './Featured';
import HomeContent from './HomeContent';
import { Container } from 'semantic-ui-react';

const Home = () => {
    return (
        <Container>
            <HomeContent />
            <Featured />
        </Container>
    )
}

export default Home;