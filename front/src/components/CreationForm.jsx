import React,{useState,useEffect} from 'react';
import axios from 'axios'

export default (props)=> {   
    const [Data,setData] = useState(null)

    function send(e){
        e.preventDefault()
        axios.post(`https://jsonplaceholder.typicode.com/posts/`,{
            title: document.getElementsByClassName('title')[0].value,
            body: document.getElementsByClassName('content')[0].value,
            userId: document.getElementsByClassName('userid')[0].value,
          }).then(res=>{setData(res.data)})    
        
    }

    //key que pide React
    let key=0;

    return (     
        !Data ?   
        <form onSubmit={send}>
            <label htmlFor="userid">UserId:</label>
            <input type="text" name="userid" className="userid"/>
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