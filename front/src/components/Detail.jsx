import React,{useState,useEffect} from 'react';
import axios from 'axios'

import logo from '../../utils/loading.gif'

export default (props)=> {

    const [id,setId] = useState(props.location.state.id)
    const [Data,setData] = useState(null)
    const [isLoading,setisLoading] = useState(false)
    
    const handleClick=(id)=>{debugger
        setData(null)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            setData(res.data)
            setisLoading(false)
            setId(id)
        })         
        .catch(err=>{
            setisLoading(false)
            setData({})                        
            setId(id)            
        })
    }
         
    useEffect(()=>{
        if(id>-1){
            handleClick(id)
        }      
    },[])

    //key que pide React
    let key=0;

    return (
        <div>
            {id==-1 ?
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
                <label htmlFor="id">Enter the id:</label>
                <input type="text" name="id" className="inputid"/>
                <input type="button" value="Find" onClick={()=>{handleClick(document.querySelector(".inputid").value)}}/>
            </div>
            :
            Data==null && id>0 ?
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop:'1%'}}>        
                <img src={logo} alt=""/>
                <p>Loading !!!</p>
            </div>
            :
            Object.values(Data).length>0 && id>0 ?
                <div>
                    {Object.values(Data).map(data=>{
                        return <p key={key++}>{data}</p>
                    })}
                </div>        
            :
            <p>The ip not exist</p>
            }
        </div>           
        
    ) 
}