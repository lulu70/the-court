import React from "react"
// import ball from "./images/ball.png"
import { TweenMax } from "gsap"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Ball = ({ data }) => {
  const ballRef = React.useRef(null)
  React.useEffect(() => {
    data.light ? show() : hide()
  }, [data.light])

  React.useEffect(() => {
    data.jump ? jump() : stop()
  }, [data.jump])

  const show = () => {
    TweenMax.fromTo(
      ballRef.current,
      1,
      { x: "-60vw", rotation: 0, opacity: 1 },
      { x: 0, rotation: 720, opacity: 1 }
    )
    // TweenMax.to(ballRef.current, 1, { x: 0, rotation: 720, opacity: 1 })
  }
  const hide = () => {
    TweenMax.to(ballRef.current, 0.5, { opacity: 0 })
  }
  const jump = () => {
    TweenMax.to(ballRef.current, 0.6, {
      y: -500,
      repeat: -1,
      yoyo: true,
    })
  }
  const stop = () => {
    TweenMax.to(ballRef.current, 0.6, { y: 0 })
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "ball.png" }) {
            childImageSharp {
              fixed(width: 120, height: 120) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <div ref={ballRef} className="ball">
          <Img fixed={data.file.childImageSharp.fixed} alt="ball" />
        </div>
      )}
    />
  )
}

export default Ball
