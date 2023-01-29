import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom';


const Create = () => {

    const [name, setName]   = useState("");
    const [email, setEmail] = useState("");

    const history = useNavigate();

    const header = { 'Access-Control-Allow-Origin': '*' };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(
            'https://63c51773f80fabd877dfe566.mockapi.io/crud-tut',
            {name:name,email:email,header}
        
        )
        .then(() => {
            history('/read');
        });
    }

  return (
    <>
        <div className='d-flex justify-content-between m2' >
            <h2 className="center"> Create </h2>
            <Link to="/read">
                <button className='btn btn-primary'> Show old data </button>
            </Link>
        </div>
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" onChange={ (e) => setName(e.target.value) } />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => setEmail(e.target.value) } />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default Create