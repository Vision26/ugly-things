import React, { useState, useContext } from "react"
import { UserContext } from "./userContext"
import "./App.css"


//edit input - will create the edited version or new version for submit
//og's are the originals will be used in the JSX to pass to UI
//create the new state
//create the onChange for new edit submit form
//pass the new state to axios.put function
//and equal prevState to new state from EditInput component
function EditInputs(props) {
    const { editUglyThing, uglyThings, deleteUgly } = useContext(UserContext)

    //was used for original input component state
    const [oGState, setoGState] = useState({
        oGtitle: props.title,
        oGdescription: props.description,
        oGimgUrl: props.imgUrl,
        oGId: props.id,
    })
    // console.log(props.id)
// console.log(oGState)
    const [editUglyState, setEditUglyState] = useState({
        id: props.id,
        editTitle: '',
        editDescription: '',
        editImgUrl: ''
    })

    const editHandleChange = e => {
        const { name, value } = e.target
        setEditUglyState(preveditUglyState => ({
             ...preveditUglyState,
            [name]: value
        }))
    }

    const editHandleSubmit = event => {
        event.preventDefault()
//    console.log(editUglyState)
        editUglyThing(editUglyState)
        // setEditUglyState(previous => ({
            
        // }))
        
    }

    return (
        <div>
            <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <img className="centerImgs" src={props.imgUrl} alt="images"/>
            </div>

            <form onSubmit={editHandleSubmit}>
                <input
                    className="ugly-meme"
                    type="text"
                    placeholder="Edit Title"
                    name="editTitle"
                    value={editUglyState.editTitle}
                    onChange={editHandleChange}
                />
                <br />
                <input
                    className="ugly-meme"
                    type="text"
                    placeholder="Edit Description"
                    name="editDescription"
                    value={editUglyState.editDescription}
                    onChange={editHandleChange}
                />
                <br />
                <input
                    className="ugly-meme"
                    type="text"
                    placeholder="Edit imgUrl"
                    name="editImgUrl"
                    value={editUglyState.editImgUrl}
                    onChange={editHandleChange}
                />

                <button className="editSaveButton">Save</button>
            </form>
                <button className="delete" onClick={() => deleteUgly(props.id, oGState)}>Delete</button>
        </div>
    )
}

export default EditInputs