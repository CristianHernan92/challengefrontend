import React,{useState,useEffect} from 'react';
import axios from 'axios'

import logo from '../../utils/loading.gif'
import { Link } from 'react-router-dom';

export default ()=> {
    const [Data,setData] = useState(null)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>setData(res.data))
    },[])    

    return !Data ?
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
            <img src={logo} alt=""/>
            <p>Loading !!!</p>
        </div>
        :
        <div>
            {Data.map(data=>{
                return <div key={data.id} style={{display:'flex'}}>
                    <div style={{width:'50%'}}>{data.title}</div>  
                    <div style={{display:'flex',width:'50%',justifyContent:'space-around'}}>
                        <Link to={{pathname: '/showdetail',state: {id:data.id}}} style={{textDecoration:'none'}}>DETAIL</Link>
                        <Link to={{pathname: '/editionformulary',state: {id:data.id,userId:data.userId}}} style={{textDecoration:'none'}}>EDIT</Link>                                                            
                        <Link to={{pathname: '/delete',state: {id:data.id}}} style={{textDecoration:'none'}}>DELETE</Link> 
                    </div>                    
                </div>
            })}
        </div>
        
}