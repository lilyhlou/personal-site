import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody, CardImg, CardImgOverlay} from 'react-bootstrap'
import Img from "gatsby-image"

const Page = ({ title, subtitle, path, date, body, tech, image}) => {
    return(
        <Card>
            <Card.Img fluid={image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title> {title} </Card.Title>
                <Card.Subtitle> {subtitle} </Card.Subtitle>
                <Card.Subtitle> {path} </Card.Subtitle>
                <Card.Subtitle> {date} </Card.Subtitle>
                <Card.Subtitle> {tech} </Card.Subtitle>
                <Card.Body> {body} </Card.Body>
                <Img fluid={image} />
            </Card.ImgOverlay>
        </Card>

    )
}
export default Page
