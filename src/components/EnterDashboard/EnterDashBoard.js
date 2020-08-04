import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Header, Icon, Popup } from 'semantic-ui-react';
import HiCard from './HiCard';

export default function EnterDashboard() {
    return (
        <div>
            <Header inverted >Hi! Welcome to Rocío Díaz's Challenge <span role="img" aria-label="happy emoji">😀</span></Header>
            <Button onClick={() => window.location.replace('/dashboard')} animated>
                <Button.Content visible>Enter Dashboard</Button.Content>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <AboutMe></AboutMe>
        </div>
    );
}

const AboutMe = () => (
    <Popup hoverable basic content={<HiCard></HiCard>} trigger={<Button className="about-button" animated='vertical'>
        <Button.Content hidden><Icon name='arrow down' /></Button.Content>
        <Button.Content visible>
            About me
        </Button.Content>
    </Button>} />
)