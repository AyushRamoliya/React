import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import Task from './Redux/Task'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Task/>
      </Provider>
    </div>
  )
}