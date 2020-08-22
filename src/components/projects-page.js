import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody} from 'react-bootstrap'
import Img from "gatsby-image"

const Page = ({ title, subtitle, path, date, body, image}) => {

    return(
        <div>
        <p> {title} </p>
        <p> {subtitle} </p>
        <p> {path} </p>
        <p> {date} </p>
        <p> {body} </p>
        <Img fluid={image} />

        </div>

    )
}
export default Page