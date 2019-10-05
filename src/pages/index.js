import React from "react"
import "../App.css"
import db from "../firebase"

import Ball from "../Ball"
import Court from "../Court"
import { Helmet } from "react-helmet"

export default () => {
  const [data, setData] = React.useState("")
  React.useEffect(() => {
    const dataRef = db.ref("data")
    dataRef.on("value", snapshot => {
      setData(snapshot.val())
    })
  }, [])
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Court</title>
      </Helmet>
      <header className="App-header">
        <Ball data={data} />
        <Court data={data} />
      </header>
    </div>
  )
}
