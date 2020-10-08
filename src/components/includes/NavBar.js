import React from 'react'
import { Link } from 'react-router-dom'


const NavBar=()=> {
    const showNavBar=()=>{
    let template = null
    template=<div className="header">
       <div className="logo"> 
            <h3>projet react</h3>
       </div> 
       <nav>
           <Link to="/">Accueil</Link>
           <Link to="/add">Ajouter</Link>
           
       </nav>
    </div>;
              return template;
    }
    
    return (
        <div>
            {showNavBar()}  
        </div>
    )
}

export default NavBar
