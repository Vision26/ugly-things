import React, { useContext } from "react"
import axios from "axios"
import './App.css';
import { UserContext } from "./userContext"
import Inputs from "./Inputs"

function App() {
  const { uglyThings } = useContext(UserContext)

  return (
    <div className="body">

      <Inputs />

    </div>
  )
}


export default App;
