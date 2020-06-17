import React from 'react'
import { createNote } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'


// store.dispatch(createNote('the app state is in redux store'))
// store.dispatch(createNote('state changes are made with actions'))



const App = () => {
  
    const dispatch = useDispatch()
    dispatch(createNote('the app state is in redux store'))
    dispatch(createNote('state changes are made with actions'))
    
    return(
      <div>
        <NewNote />
        <Notes />
      </div>
    )
}
  
export default App