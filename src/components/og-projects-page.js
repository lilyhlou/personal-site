import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardImgOverlay} from 'react-bootstrap'
import Img from "gatsby-image"
import '../styles/global.scss';
import '../styles/card.scss';

const Page = ({ title, subtitle, path, date, body, tech, image}) => {
    return(
        <Card>
            <Card.Img src={image.src} alt={title}/>
            <Card.ImgOverlay>

            <Card.Body className="overlay">
                <div className="text"> 
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle > {subtitle} </Card.Subtitle>
                </div>
            </Card.Body>
            </Card.ImgOverlay>

        </Card>

    )
}
export default Page
