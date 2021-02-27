import React,{useState,useEffect} from 'react';
import axios from 'axios'

export default (props)=> {
    const [Data,setData] = useState(null)

    function send(e){
        e.preventDefault()    
        axios.put(`https://jsonplaceholder.typicode.com/posts/`+props.location.state.id,{ "id": props.location.state.id,"title": document.getElementsByClassName('title')[0].value,"body": document.getElementsByClassName('content')[0].value,"userId": props.location.state.userId}).then(res=>{setData(res.data)})
    }
    
    function secondsend(e){
        e.preventDefault()
        axios.get(`https://jsonplaceholder.typicode.com/posts/`+document.getElementsByClassName('id')[0].value).then(res=>{
            axios.put(`https://jsonplaceholder.typicode.com/posts/`+res.data.id,{ "id": res.data.id,"title": document.getElementsByClassName('title')[0].value,"body": document.getElementsByClassName('content')[0].value,"userId": res.data.userId}).then(res=>{setData(res.data)})
        })     
        
    }

    //key que pide React
    let key=0;

    return (
        !Data ?

        props.location.state.id!=-1 ?
        <form onSubmit={send}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" className="title"/>
            <label htmlFor="content">Content:</label>
            <input type="text" name="content" className="content"/>
            <input type="submit" value="Edit"/>
        </form>
        :
        <form onSubmit={secondsend}>
            <label htmlFor="id">Id:</label>
            <input type="text" name="id" className="id"/>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" className="title"/>
            <label htmlFor="content">Content:</label>
            <input type="text" name="content" className="content"/>
            <input type="submit" value="Edit"/>
        </form>

        :

        <div>
            {Object.values(Data).map(data=>{
                return <p key={key++}>{data}</p>
            })}
        </div> 
            
    ) 
}