import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        const newAuthor={
            name
        }
        axios.post("http://localhost:8000/api/new", newAuthor)
        .then(res => {
            console.log(res.data);
            navigate('/author');
        })
        .catch(err => {
            console.log(err.response.data.errors.name.message);
            const errArr = [];
            errArr.push(err.response.data.errors.name.message);
            setErrors(errArr);
        })
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={("/author")}>Home</Link>
        <fieldset>
            <h3>Add a new author:</h3>
            {
                errors.map((err, index)=>{
                    return(
                        <p key={index} style={{color:"red"}} >{err}</p>
                    )
                })
            }
            <form onSubmit={submitHandler}>
                <label>Name</label><br/>
                <input onChange={(e)=>{setName(e.target.value)}}/><br/>
                <Link to={("/author")}>
                        <button>Cancel</button>
                        </Link>
                <input type='submit' value='Create author'/>
            </form>
        </fieldset>
    </div>
  )
}

export default Form;