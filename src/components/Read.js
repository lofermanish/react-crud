import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {

    const [ data, setData ] = useState([]);
    const [tableColor, setTableColor] = useState('primary');

    function getData() {
        axios.get( 'https://63c51773f80fabd877dfe566.mockapi.io/crud-tut' )
        .then((result) => {
            console.log(result.data);
            setData(result.data);
        });
    }
    useEffect(() => {
        getData();
    }, [])
    
    function handleDelete(id) {
        axios.delete( `https://63c51773f80fabd877dfe566.mockapi.io/crud-tut/${id}` )
        .then( () => {
            getData();
        });
    }

    const setDataToLocal = (id,name,email) => {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);

    }

  return (
    <>
    <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" 
        onClick={() => {
            if ( 'success' === tableColor ) setTableColor('primary');
            else setTableColor('success');
        }}
        />
        <label className="form-check-label" for="flexSwitchCheckDefault">{`Table color ${tableColor}`}</label>
    </div>
    <div className='d-flex justify-content-between m2' >
        <h2 > Read </h2>    
        <Link to="/">
            <button className='btn btn-primary'> Add data </button>
        </Link>
    </div>

    <table className={`table table-striped table-hover table-${tableColor} `}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {
            data.map((eachData) => {
                return (
                    <>                   
                        <tr>
                            <td>{eachData.id}</td>
                            <td>{eachData.name}</td>
                            <td>{eachData.email}</td>
                            <td>
                                <Link to={'/update'}>
                                    <button className='btn-success' onClick={ () => setDataToLocal(eachData.id,eachData.name,eachData.email) } > Edit </button> 
                                </Link>
                            </td>
                            <td><button className='btn-danger' onClick={ () =>  handleDelete(eachData.id) } > Delete </button> </td>
                        </tr>
                    </>
                );
            })
        }
    </tbody>
  </table>
    </>
  )
}

export default Read