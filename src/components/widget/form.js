import React from 'react'
import './form.css'
import { Component } from 'react';
import {fireBaseDb} from '../../firebase'
class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            errorMessage:'',
            successMessage:''
        }
    }
    onChangeTitle=(event)=>{
       this.setState({
           title : event.target.value,
           errorMessage:''
       })
    }
    onChangeBody=(event)=>{
        this.setState({
            body : event.target.value,
            errorMessage:''
        })
     }
  formSubmit =(event)=>{
      event.preventDefault();
      switch(this.props.type){
          case 'add':
            if(this.state.title && this.state.body !==""){
                let note={
                    title:this.state.title,
                    body: this.state.body
                }
                fireBaseDb.ref('notes').push(note)
                 .then(()=>{
                     this.setState({
                         successMessage: <div className="succes-message">
                                           Note ajoutée
                                           </div>,
                          errorMessage:'',
                          title:'',
                          body:''
                     })
                 }).catch((e)=>{
                     console.log(e)
                 })
                }else{
                    this.setState({
                        errorMessage:'Ce champ est obligatoire'
                    })
                }
          break;
          case 'edit':
            if(this.state.title && this.state.body !==""){
                let note={
                    title:this.state.title,
                    body: this.state.body
                }
                fireBaseDb.ref(`notes/${this.props.id}`).update(note)
                 .then(()=>{
                     this.setState({
                         successMessage: <div className="succes-message">
                                           Note modifiée
                                           </div>,
                          errorMessage:'',
                          title:'',
                          body:''
                     })
                 }).catch((e)=>{
                     console.log(e)
                 })
                }else{
                    this.setState({
                        errorMessage:'Ce champ est obligatoire'
                    })
                }
          default:
          console.log('loading...')    
      }
  
  }
 componentWillMount(){
     if(this.props.type==='edit'){
       fireBaseDb.ref(`notes/${this.props.id}`).once('value')
       .then((snapshot)=>{
           this.setState({
               title:snapshot.val().title,
               body:snapshot.val().body
           })
       })
     }
 }
    render(){  
        return ( 
            <div>{this.state.successMessage}
            <div className="form">
                <form onSubmit={this.formSubmit}> 
                    <div className="form_element">
                        <label htmlFor="title" >Titre</label>
                        <input value={this.state.title} 
                        onChange={this.onChangeTitle}/>
                        <div className="form-error">
                            {this.state.errorMessage}
                        </div>
                    </div>
                    <div className="form_element">
                        <label htmlFor="body">Description</label>
                        <textarea  cols="30" rows="10"  
                        value={this.state.body} onChange={this.onChangeBody}/>
                        <div className="form-error">
                            {this.state.errorMessage}
                        </div>
                    </div>
                    <div className="button_element">
                        <button type="submit">Valider</button>
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default Form
