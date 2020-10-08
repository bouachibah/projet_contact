import ReactDOM from 'react-dom'
import React from 'react'
import './firebase';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home'
import Delete from './components/Delete'
import Edit from './components/EditNote'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote';

const Routes=()=>{
        return (
            <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/delete/:id" exact component={Delete}></Route>
            <Route path="/edit/:id" exact component={EditNote}></Route>
            <Route path="/add" exact component={AddNote}></Route>
            </Switch>
        )
    }
    export default Routes;