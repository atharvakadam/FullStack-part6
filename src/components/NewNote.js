import React from 'react'
// import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = (props) => {
    // const dispatch = useDispatch()

    const addnote = (event) => {
        event.preventDefault()
        const content = event.target.note.value
        event.target.note.value = ''
        props.createNote(content)
    }

    return (
        <form onSubmit={addnote}>
            <input name="note"/>
            <button type="submit">add</button>
        </form>
    )
}

const connectedNewNote = connect(null, { createNote })(NewNote)
export default NewNote