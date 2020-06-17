import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import noteReducer, { createNote } from './reducers/noteReducer'
import filterReducer, { filterChange } from './reducers/filterReducer'
import App from './App';
// import * as serviceWorker from './serviceWorker';

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

const store = createStore(reducer,composeWithDevTools())

console.log(store.getState())


const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root')
  );
} 

renderApp()
store.subscribe(renderApp)
store.subscribe(() => console.log(store.getState()))
// store.dispatch(filterChange('IMPORTANT'))
// store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
