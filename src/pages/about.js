import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql, StaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global.scss';
import Img from "gatsby-image"
import {Container, Row, Col} from 'react-bootstrap'


const About = () => (
  <StaticQuery
  query={graphql`
  query {
    profilepic: file(relativePath: {eq: "code-working.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize        }
      }
    }
  }
      `}
  render={data => {
    const imageData = data.profilepic.childImageSharp.fluid
    return (
            <Container fluid id="about">
              <Row><Col><h3 className="sectionTitle" data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease"><b>About Me</b></h3></Col></Row>
              <Row>
                <Col>
                  <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Hey there! My name is Lily and I'm interested in a lot of different things. Here are a few of them:</p>
                   <h4 data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Journalism and Storytelling 🗣</h4>
                    <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
                    Though I'm not actively reporting anymore, I owe most of my skillsets to what student newspapers and internships have taught me. As a journalist, I covered activism, politics, food and internet culture. I was especially interested in longform storytelling, which led me to join and become editor-in-chief of Synapse Magainze, a longform magazine at UNC and pitch my own articles on student activism to outlets. I also interned at UNC's Southern Oral History Center, where I interviewed and conducted research on American Indian Activists at UNC.                  
                    </p>
                    <h4 data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Technology 🤖</h4>
                    <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Aftering taking Intro to Computer Science my second semester of college, I was instantly hooked, spending countless hours working on problem sets and extra credit. I love problem solving and the way that my computer science courses challenge me to think in new ways. To me, coding feels like magic—nowhere else can I transform an idea into tangible, interactive programs through just a few lines of text. I love figuring out the different ways of solving a problem and understanding how a computer works, from C to assembly language to binary to circuits and transistors. Because of that, I continued to take classes in the CS department, hoping that knowing how to code would be useful to me someday, until I realized majoring in it was a possibility.</p>
                    <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Since then, I've combined my interests in journalism and technology by taking classes in human computer interaction and digital humanities and as a developer and product manager at UNC’s <a href="http://reeseinnovate.com/">Reese Innovation Lab</a>, using technology to create products that improve storytelling and education. I also spent a summer reaching education technology (specifically, learning games) at Carngie Mellon's Human Computer Interaction Institute and volunteer as a data fellow at BlueBonnet Data, where I use Python and GIS to conduct research on voter outreach for Sam Edney's NC HD-113 campaign.</p>
                    <h4 data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Education/Community/Mentorship 🎓</h4>
                    <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">I owe everything I have to the people who have supported me—I owe my interests in journalism and computer science to two incredible professors who believed in me. My journalism professor continuously invested time and care into editing my articles, even once writing an entire page of feedback that was longer than my original article. I've had mentors who have helped me navigate industries I was unfamiliar with and helped me through imposter syndrome. I realize that not everyone has the same opportunities that I have.</p>
                    <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">During my senior year, I volunteered as an after school tutor at Carboro High School. Working with kids taught me so much, and I hope to continue volunteering on something similar post-pandemic. I also worked in educational policy across different organizations and cities through Teach for America's Accelerate Fellowship in the summer of 2018. Through that fellowship, I was able to learn about problems in the education system in rural and urban areas and different ways TFA alum were working to fix them.</p>
                      <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">At UNC, I worked to build community through various student organizations. I was heavily involved in the Asian American community, where I helped avocate for an Asian American studies program and an Asian American Center (<a href="https://www.dailytarheel.com/article/2019/10/asian-american-center">which was created in Fall 2020</a>!) and organized <a href="https://taascon.org/">a conference on the complexity of Asian American identities for college students</a> in North Carolina's Triangle region.</p>
                    <h4 data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Misc.🏠</h4>
                    <p data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Besides the above, I enjoy texting my friends, reading, listening to podcasts (recs: Still Processing, The Daily, FiveThirtyEight Politics, Longform and Reply All), watching TikToks and making different types of pasta. If you'd like to speak about anything above or if you'd like to tell me about some of your interests, reach out at lilylou16[at]gmail.com or find me on my social media below.</p>
                </Col>
                <Col>
                <div className="sticky" data-sal="slide-right"
  data-sal-delay="300"
  data-sal-duration="900"
  data-sal-easing="ease">
                  <Img fluid={imageData} alt="A photo of me after the code works"/>
                  <p><i>Me, after my code finally worked</i></p>
                </div>
                </Col>
              </Row>
            </Container>
          )


  }}
  />
)
export default About
