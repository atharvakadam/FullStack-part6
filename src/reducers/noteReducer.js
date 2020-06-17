
const noteReducer = (state = [], action) => {
    if(action.type === 'NEW_NOTE') {
        // return state.concat(action.data)
        return [...state, action.data]
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

const generateId = () => Number((Math.random()* 1000000).toFixed(0))

const createNote = (content) => {
  return {
    type:'NEW_NOTE',
    data: {
      content,
      important: false,
      id:  generateId()
    }
  }
}

const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}


export { noteReducer, generateId, createNote, toggleImportanceOf }