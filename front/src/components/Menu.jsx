import React from 'react'
import {Link} from 'react-router-dom'

export default ()=>{
    {
        return <div className="menu" style={{background:'darkgrey',display:'flex',height:'50px'}}>
                    <div style={{display:'flex',justifyContent:"center",alignSelf:'center',width:'50%'}}>
                        <div style={{display:'flex',width:'100%',justifyContent:'space-evenly'}}>
                            <Link to="/home" style={{textDecoration:'none'}}>HOME</Link> 
                            <Link to={{pathname: "/editionformulary",state: {id:-1,userId:-1}}} style={{textDecoration:'none'}}>EDITION FORMULARY</Link>
                            <Link to="/creationformulary" style={{textDecoration:'none'}}>CREATION FORMULARY</Link>
                            <Link to={{pathname: '/showdetail',state: {id:-1}}} style={{textDecoration:'none'}}>SHOW DETAIL</Link>
                        </div>                                
                    </div>           
                </div>
    }
}