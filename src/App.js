import React from 'react'
// import { createNote } from './reducers/noteReducer'
// import { useSelector, useDispatch } from 'react-redux'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import VisibilityFilter from './components/VisibilityFilter'


// store.dispatch(createNote('the app state is in redux store'))
// store.dispatch(createNote('state changes are made with actions'))



const App = () => {

    return(
      <div>
        <NewNote />
        <VisibilityFilter />
        <Notes />
      </div>
    )
}
  
export default App