import noteService from '../services/notes'

const noteReducer = (state = [], action) => {
    if(action.type === 'NEW_NOTE') {
        // return state.concat(action.data)
        return [...state, action.data]
    }
    else if(action.type === 'INIT_NOTES') {
        return action.data
    }
    else if (action.type === 'TOGGLE_IMPORTANCE') {
        const id = action.data.id
        const noteToChange = state.find(n => n.id === id)
        const changedNote = {
            ...noteToChange,
            important: !noteToChange.important
        }
        return state.map(note => note.id !== id ? note : changedNote)
    }

    return state
}

export const initializeNotes = () => {
    return async dispatch => {
        const notes = await noteService.getAll()
        dispatch({
            type: 'INIT_NOTES',
            data: notes,
        })
    }
}

export const createNote = (content) => {
    return async dispatch => {
        const newNote = await noteService.createNew(content)
        dispatch({
            type: 'NEW_NOTE',
            data: newNote,
        })
    }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}


export default noteReducer