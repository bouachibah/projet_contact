import ReactDOM from 'react-dom'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import NavBar from './components/includes/NavBar'
const App=()=>{
        return (
            <BrowserRouter>
            
            <Routes/>
            </BrowserRouter>
        )
    }
ReactDOM.render(<App />,document.getElementById("root"));

