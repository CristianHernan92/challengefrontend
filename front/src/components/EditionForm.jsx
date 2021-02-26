import React,{useState,useEffect} from 'react';
import axios from 'axios'

export default (props)=> {
    function send(e){
        e.preventDefault()       
        axios.put(`https://jsonplaceholder.typicode.com/posts?id=${props.location.state.id}`,{ "id": props.location.state.id,"title": document.getElementsByClassName('title')[0].value,"body": document.getElementsByClassName('content')[0].value,"userId": props.location.state.userId}).then(res=>{console.log(res.data)})
    }

    return (
        props.location.state.id!=-1 ?
        <form onSubmit={send}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" className="title"/>
            <label htmlFor="content">Content:</label>
            <input type="text" name="content" className="content"/>
            <input type="submit" value="Edit"/>
        </form>
        :
        <form>
            <label htmlFor="id">Id:</label>
            <input type="text" name="id"/>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title"/>
            <label htmlFor="content">Content:</label>
            <input type="text" name="content"/>
            <input type="submit" value="Edit" onClick={send()}/>
        </form>
            
    ) 
}