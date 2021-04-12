import React, {Component} from 'react'
import {Button, Navbar, Card} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css' 

export default class CardApp extends Component {
    render(){
        return(
            <Card style={{color: 'blue'}}>
                <Card.Img src="https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>THIS IS CARD</Card.Title>
                    <Card.Text>HELLO ZHANYA</Card.Text>
                    <Button>Bootstrap</Button>
                </Card.Body>
            </Card>
        );
    }
}