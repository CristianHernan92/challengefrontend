import React,{useState,useEffect} from 'react';
import axios from 'axios'

import logo from '../../utils/loading.gif'

export default (props)=> {
    const [Data,setData] = useState(null)

    useEffect(()=>{
        axios.delete(`https://jsonplaceholder.typicode.com/posts/`+props.location.state.id).then(res=>{setData(res.data)})
    },[])   

    return !Data ?
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
            <img src={logo} alt=""/>
            <p>Loading !!!</p>
        </div>
        :
        <div>
            <p>Deletion success !!!</p>
        </div>
        
}