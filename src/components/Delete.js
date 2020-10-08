import ReactDOM from 'react-dom'
import React from 'react'
import './includes/navBar.css'
import NavBar from './includes/NavBar'
import {fireBaseDb} from '../firebase'
const Delete=(props)=>{
    const removeNote=()=>{
     fireBaseDb.ref(`notes/${props.match.params.id}`).remove()
 .then(()=>{
    props.history.push('/');
 }).catch((e)=>{
     console.log(e);
 })
    }    
    return (
            <div>
             <NavBar />
              {removeNote()}
            </div>
        )
    }
export default Delete