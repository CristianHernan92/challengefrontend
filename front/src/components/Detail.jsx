import React,{useState,useEffect} from 'react';
import axios from 'axios'

import logo from '../../utils/loading.gif'

export default (props)=> {

    const [Id,setId] = useState(props.location.state.id)
    const [Data,setData] = useState(null)
    
    useEffect(()=>{
        if(Id!=-1)
            axios.get(`https://jsonplaceholder.typicode.com/posts?id=${Id}`).then(res=>{setData(res.data[0])})
            
    },[Id])

    //contador
    let key=0;

    return (
        //Id
        Id==-1 ?
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
            <label htmlFor="id">Enter the id:</label>
            <input type="text" name="id" className="inputid"/>
            <input type="button" value="Find" onClick={()=>{setId(parseInt(document.querySelector(".inputid").value))}}/>
        </div> 

        :

        //Data
        !Data ?
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
            <img src={logo} alt=""/>
            <p>Loading !!!</p>
        </div>
        :                
        Data!=[] ?
        <div>
            {Object.values(Data).map(data=>{
                return <p key={key++}>{data}</p>
            })}
        </div>        
        :
        <p>The ip not exist</p>
            
    ) 
}