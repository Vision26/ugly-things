import React, { useState, useContext } from "react"
import { UserContext } from "./userContext"
import "./App.css"
import EditInputs from "./EditInputs"

function Inputs(props) {
  const { createUglyThing, uglyThings } = useContext(UserContext)
  const [uglyState, setUglyState] = useState({
    title: '',
    description: '',
    imgUrl: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUglyState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    createUglyThing(uglyState)
    setUglyState(prevState => ({
      title: prevState.title = "",
      description: prevState.description = "",
      imgUrl: prevState.imgUrl = ""
    }))
  }

  const arr = uglyThings.map((arrs, index) =>
    <div key={index} className="container">
      <EditInputs
        key={arrs.title}
        title={arrs.title}
        description={arrs.description}
        imgUrl={arrs.imgUrl}
        id={arrs._id} />
    </div>)


  return (
    <div className="body">

      <form name="ugly" onSubmit={handleSubmit} >
        <input
          className="ugly-meme"
          type="text"
          placeholder="Title"
          name="title"
          value={uglyState.title}
          onChange={handleChange}
        />
        <br />
        <input
          className="ugly-meme"
          type="text"
          placeholder="Description"
          name="description"
          value={uglyState.description}
          onChange={handleChange}
        />
        <br />
        <input
          className="ugly-meme"
          type="text"
          placeholder="imgUrl"
          name="imgUrl"
          value={uglyState.imgUrl}
          onChange={handleChange}
        />

        <button className="post-button">Submit</button>
      </form>

      <br />

      <div>
        {arr}
      </div>

    </div>
  )
}

export default Inputs