import React, { FC, useContext } from 'react'
import './App.css'
import { FormContext } from './context/FormContext'

const App: FC = () => {
    const { state, dispatch } = useContext(FormContext)
    return (
        <div data-testid="app-test">
            <input
                type="text"
                name="name"
                placeholder="Enter A Name"
                onChange={(e) =>
                    dispatch({ type: 'SET_NAME', name: e.target.value })
                }
            />
            <input
                type="text"
                name="age"
                placeholder="Enter Age"
                onChange={(e) =>
                    dispatch({ type: 'SET_AGE', age: e.target.value })
                }
            />
            Name: {state.name}
            Age:{state.age}
        </div>
    )
}

export default App
