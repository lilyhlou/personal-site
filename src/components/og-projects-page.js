import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardImgOverlay} from 'react-bootstrap'
import Img from "gatsby-image"
import '../styles/global.scss';
import '../styles/card.scss';

const Page = ({ title, subtitle, path, date, body, tech, image}) => {
    return(
        <Card>
            <Card.Img src={image.src} className="img-fluid" alt="Card image" />
            <Card.ImgOverlay>
            <div class="overlay">
            <Card.Title className="hoverText"> {title} </Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Subtitle>{path}</Card.Subtitle>
                <Card.Subtitle> {date} </Card.Subtitle>
                <Card.Subtitle> {tech} </Card.Subtitle>
                <Card.Body> {body} </Card.Body>
                </div>

            </Card.ImgOverlay>
        </Card>

    )
}
export default Page
