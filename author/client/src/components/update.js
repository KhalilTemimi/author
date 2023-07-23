import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id} = useParams();
    const [name, setName] = useState("");
    // const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/'+ id)
            .then(res => {
                setName(res.data.name)
            })
            .catch(err => console.log(err))
    }, [])
    const updateHandler = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => {
                console.log(res);
                navigate("/author");
            })
            .catch(err => console.log(err))
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={("/author")}>Home</Link>
        <fieldset>
            <h3>Edit this author:</h3>
            <form onSubmit={updateHandler}>
                <label>Name</label><br/>
                <input onChange={(e)=>{setName(e.target.value)}} value={name}/><br/>
                <Link to={("/author")}>
                        <button className='btn3'>Cancel</button>
                        </Link>
                <input type='submit' value="Update author"/>
            </form>
        </fieldset>
    </div>
  )
}

export default Update;