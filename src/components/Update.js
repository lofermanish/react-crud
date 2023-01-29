import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Update = () => {
    const [id,updateId] = useState(0);
    const [name,updateName] = useState("");
    const [email,updateEmail] = useState("");

    const navigate = useNavigate();


    useEffect((id,name,email) => {
       updateId(localStorage.getItem('id'));
        updateName(localStorage.getItem('name'));
        updateEmail(localStorage.getItem('email'));
    }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put( `https://63c51773f80fabd877dfe566.mockapi.io/crud-tut/${id}`,
            {
                name:name,
                email:email
            }
        )
        .then(() => {
            navigate('/read');
        });
        
    } 

  return (
    <>
    <h2 className="center"> Update </h2>
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" 
                value={name}
                 onChange={ (e) => updateName(e.target.value) } 
                 />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" 
                value={email}
                onChange={ (e) => updateEmail(e.target.value) } 
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            
            <button type="submit" className="btn btn-primary"
            onClick={handleUpdate}
            >Update</button>
            <Link to="/read">
                <button className='btn btn-secondary mx-4'> back </button>
            </Link>
        </form>
    </>
  )
}

export default Update