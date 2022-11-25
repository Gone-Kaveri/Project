import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//importing images
import cerealpic from '../images/cereals.jpg';
import flourpic from '../images/flours.jpg'
import dairypic from '../images/dairy.jpeg'
import drinkspic from '../images/drinks.jpg';
import floorpic from '../images/floor cleaning.jpg';
import pujapic from '../images/puja.jpg';
import soappic from '../images/saops.jpg';
import saucespic from '../images/sauces.jpg';
import snackspic from '../images/snacks.jpg';
import spicespic from '../images/spices.jpg';

import './homepage.css';

const Home = () => {
  return (
    <div >
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={cerealpic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Cereals and Grains</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={flourpic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Flours</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={snackspic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Snacks</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={drinkspic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Drinks</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={soappic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Soaps and Shampoo</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={dairypic}/>
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Diary products</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={pujapic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Puja items</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={spicespic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Spices</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={saucespic} />
          <Card.Body>
            <Card.Title classname=""style={{size: '2rem'}}>Sauces</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <div>
        <Card style={{ width: '27rem' }}>
          <Card.Img variant="top" src={floorpic} />
          <Card.Body>
            <Card.Title style={{size: '2rem'}}>Cleaning items</Card.Title>
            <Button variant="primary">view all</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
    );
};
  
export default Home;