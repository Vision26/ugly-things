import axios from "axios"
import React, { useState, useEffect } from "react"
const UserContext = React.createContext()


function UserContextProvider(props) {
    const [uglyThings, setUglyThings] = useState([])
console.log(uglyThings)

    //Get data from API using axios.get, returns empty array 
    useEffect(() => {
        axios.get("https://api.vschool.io/josehernandez/thing")
            .then(response => response.data)
            .then(data => setUglyThings(data))
            .catch(err => console.log(`Error: ${err}`))
    }, [])

    //POST using API


    const createUglyThing = newUglyThing => {
        axios.post("https://api.vschool.io/josehernandez/thing", newUglyThing)
            .then(res => {
                setUglyThings(prevThings => [...prevThings, res.data])
            })
    }

    //Edit Ugly Things/axios.put
    //map uglyThings array in order to grab id
    //set the new state
    //the response

    // console.log(currentUglyThing.id)
    //filter method on uglythings that removes the ugly thing by the id, set the new state with the filter state 
    //set data as an argument in setuglythings

    const editUglyThing = (thingState) => {
        // console.log(thingState.id)
        axios.put(`https://api.vschool.io/josehernandez/thing/${thingState.id}`,
            {
                title: thingState.editTitle,
                description: thingState.editDescription,
                imgUrl: thingState.editImgUrl
            })
            .then(res => {
                console.log(res.data)
                setUglyThings(prevThings => prevThings.map(item => item._id !== thingState.id ? item : res.data))
                // .then(res => {
                //     setTargets(prevTargets => prevTargets.map(target => target._id !== targetId ? target : res.data))
                // })
                // setUglyThings(previous => [...previous, res.data])
            })
            .catch(err => console.log(`ERROR: ${err}`))
    }

    const deleteUgly = editId => {
        axios.delete(`https://api.vschool.io/josehernandez/thing/${editId}`)
            .then(res => setUglyThings(prev => prev.filter(pre => {
                console.log(pre)
                // setUglyThings(pre => [...pre, res.data])
                return pre._id !== editId
            })))
            .catch(err => `ERROR: ${err}`)
    }

    return (
        <UserContext.Provider
            value={{ uglyThings, createUglyThing, editUglyThing, deleteUgly }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext }