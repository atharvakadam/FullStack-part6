import React from 'react'
// import { createNote } from './reducers/noteReducer'
// import { useSelector, useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'
import { initializeNotes } from './reducers/noteReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


// store.dispatch(createNote('the app state is in redux store'))
// store.dispatch(createNote('state changes are made with actions'))



const App = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeNotes())
    }, [dispatch])

    return(
      <div>
        <NewNote />
        <VisibilityFilter />
        <Notes />
      </div>
    )
}
  
export default App