import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import './includes/navBar.css'
import NavBar from './includes/NavBar'
import{fireBaseDb} from '../firebase'
import { database } from 'firebase'
import {Link} from 'react-router-dom'
import './note.css'
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            notes:[],
        succesMessage:''
        }
    } 
    componentWillMount(){
        fireBaseDb.ref('notes').once('value')
    .then((snapshot)=>{
        const data=[];
        snapshot.forEach(element => {
            data.push({
                id:element.key,
                ...element.val()
            })
            this.setState({
                notes : data
            })
        });
    })    
} 
showData=()=>{
    let template = '';
    template= this.state.notes.map((note,i)=>{
        return(
        <tbody>
                <tr key ={i}>
                <td>{note.title}</td>
                <td><p>{note.body}</p></td>
                <td><Link to={`/edit/${note.id}`} className="link">Modifier</Link>
                    <Link to={`/delete/${note.id}`} className="link">Supprimer</Link>
                </td>
                </tr>
         </tbody>
            )
    }
    )
    return template;
}
    render(){
        return (
            <div>
             <NavBar />
             <div className="container">
             {this.state.succesMessage}
             <table>
                 <thead>
                   <tr>
                        <td className="th">Titre</td>
                        <td className="th">Description</td>
                        <td className="th">Action</td>
                   </tr>   
                 </thead>
                 {this.showData()}   
              </table>
              </div>
            </div>
        )
    }

}
export default Home