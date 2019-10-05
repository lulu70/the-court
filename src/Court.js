import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { TweenMax } from "gsap"
import BackgroundImage from "gatsby-background-image"

const Court = ({ data }) => {
  const lightCourtRef = React.useRef(null)
  React.useEffect(() => {
    data.light ? turnLightOn() : turnLightOff()
  }, [data.light])
  const turnLightOn = () => {
    TweenMax.to(lightCourtRef.current, 1, { opacity: 1 })
  }
  const turnLightOff = () => {
    TweenMax.to(lightCourtRef.current, 1, { opacity: 0 })
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "court-with-light.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div ref={lightCourtRef} className="court">
          <BackgroundImage
            className="court"
            fluid={data.file.childImageSharp.fluid}
            alt="court-with-light"
            backgroundColor="black"
          />
        </div>
      )}
    />
  )
}

export default Court
