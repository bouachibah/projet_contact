import ReactDOM from 'react-dom'
import React from 'react'
import './includes/navBar.css'
import NavBar from './includes/NavBar'
import Form from './widget/form'

const EditNote=(props)=>{
    console.log(props.match.params.id)
        return (
            <div>
                <NavBar />
                <Form type="edit" id={props.match.params.id}/>
              
            </div>
        )
    }
    export default EditNote