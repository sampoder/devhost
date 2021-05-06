import React from "react"
import Container from "../container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"

// //icons
// import Github from "../../images/github.svg"
// import Linkedin from "../../images/linkedin.svg"
// import Website from "../../images/link.svg"

const ChiefGuest = () => {
    const data = useStaticQuery(graphql`
    query {
      dc: file(relativePath: { eq: "speakers/dc.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="speakers">
      <Container>
        <h3 className="section__title">Chief Guest</h3>
        <SpeakerCard
          image={data.dc.childImageSharp.fluid}
          speakerName="Dr. Rajendra Kumar"
          subTitle="Deputy Commissioner"
          description="Dr Rajendra hails from Theerthahalli in Shivamogga. After completing MBSS, he had written UPSC and was serving in the Indian Railways. In 2013, he passed the UPSC exam with 32nd rank. He had served as the assistant commissioner of Puttur in 2015."
          // git="/"
          // linkedin="https://www.linkedin.com/in/madhuakula/"
          // website="https://madhuakula.com/"
        />
      </Container>
    </section>
  )
}

const SpeakerCard = ({
  image,
  speakerName,
  subTitle,
  description,
  git,
  linkedin,
  website,
}) => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <div className="speakercard">
        <div className="speakercard__left">
          <Img
            className="speakercard__left-image"
            fluid={image}
            alt="speakers"
          />
          <h2 className="speakercard__left-title">{speakerName}</h2>
          <h3 className="speakercard__left-subtitle">{subTitle}</h3>
        </div>
        <div className="speakercard__right">
          <h3 className="speakercard__right-title">About</h3>
          <h3 className="speakercard__right-description">{description}</h3>

          {/* <div className="speakercard__right__link">
            <div className="card__right__link-left">
              <a target="_blank" rel="noreferrer" href={git}>
                <img
                  className="speakercard__right__link-left-github"
                  src={Github}
                  alt="github logo"
                />
              </a>
              <a target="_blank" rel="noreferrer" href={linkedin}>
                <img
                  className="speakercard__right__link-left-image"
                  src={Linkedin}
                  alt="linkedin logo"
                />
              </a>
            </div>
            <div className="card__right__link-right">
              <a target="_blank" rel="noreferrer" href={website}>
                <img
                  className="speakercard__right__link-left-image"
                  src={Website}
                  alt="website logo"
                />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default ChiefGuest;
