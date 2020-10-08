import ReactDOM from 'react-dom'
import React from 'react'
import './includes/navBar.css'
import NavBar from './includes/NavBar'
import Form from './widget/form'

const AddNote=()=>{
        return (
            <div>
                <NavBar />
                <Form type="add"/>
              
            </div>
        )
    }
export default AddNote