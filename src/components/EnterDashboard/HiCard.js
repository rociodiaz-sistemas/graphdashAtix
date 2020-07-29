import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, List } from 'semantic-ui-react';

function HiCard() {
    return (<Card style={{ boxShadow: 'none' }}>
        <CVCarousel></CVCarousel>
        <Card.Content>
            <Card.Header>
                Hi! This is my <img style={{ marginBottom: '8px' }} src={require('../../images/atix.png')} alt="AtixLab Logo" /> labs Challenge
      </Card.Header>
            <CardList></CardList>
        </Card.Content>
        <Card.Content extra>
        </Card.Content>
    </Card>
    )
}

const CVCarousel = () => (
    <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop={true}>
        <div>
            <img style={{ height: 'auto' }} src={require('../../images/mifoto.PNG')} alt="Rocío Díaz's profile pic" />
        </div>
        <div>
            <img src={require('../../images/experience.png')} alt="Rocío Díaz job experience" />
        </div>
    </Carousel>
)

const CardList = () => (
    <List animated verticalAlign='middle'>
        <List.Item>
            <List.Icon color='blue' name='linkedin' />
            <List.Content><a target="_blank" href="https://www.linkedin.com/in/rocío-díaz-698444194"> My Linkedin </a></List.Content>
        </List.Item>
        <List.Item>
            <List.Icon color='black' name='phone' />
            <List.Content><a href="tel:+0541125127060"> Contact me now </a> </List.Content>
        </List.Item>
    </List>
)

export default HiCard;