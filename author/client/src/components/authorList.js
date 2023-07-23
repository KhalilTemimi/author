import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import Table from 'react-bootstrap/Table';

const AuthorList = (props) =>{

    const[author, setAuthor] = useState([]);
    const [refreshState, setRefreshState] = useState(false);
    const refresh = () =>{
        setRefreshState(!refreshState)
    }


    useEffect(() =>{
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            console.log(res.data)
            setAuthor(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[refreshState]);

    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/author/'+id)
            .then(res => {
                refresh()
            })
            .catch(err => console.log(err))
    }

return(
    <div>
        <h1>Favorite Authors</h1>
        <Link to={('/new')}>Add an author</Link>
        <fieldset>
            <h3>We have quotes by:</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Author Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            author.map((author, index) => {
                            return(
                            <div key={index}>
                                <tr>
                                    <td>{author.name}</td>
                                    <td>
                                    <Link to={("/author/"+author._id)}>
                                    <button className="btn2" size="lg">Edit</button>
                                    </Link>
                                    </td>
                                    <td>
                                    <button className="btn1" onClick={(e)=>{deleteHandler(author._id)}}>Delete</button>
                                    </td>
                                </tr>            
                            </div>
                            )
                        })
                        }
                </tbody>
            </Table>
        </fieldset>
    </div>
)}

export default AuthorList;