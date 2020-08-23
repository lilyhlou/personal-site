import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardImgOverlay} from 'react-bootstrap'
import Img from "gatsby-image"
import '../styles/global.scss';
import '../styles/card.scss';

const PageDraft = ({ title, subtitle, path, date, body, tech, image}) => {
    return(
        <Card className="container card" border="white">
            <Img fluid={image} className="img-fluid image" alt="Card image"  />

            <Card.Body className="overlay">
                <div className="text"> 
                <Card.Subtitle > {subtitle} </Card.Subtitle>
                <Card.Subtitle > {path} </Card.Subtitle>
                <Card.Subtitle > {date} </Card.Subtitle>
                <Card.Subtitle > {tech} </Card.Subtitle>
                </div>
            </Card.Body>
                <Card.Title> {title} </Card.Title>

        </Card>

    )
}
export default PageDraft
