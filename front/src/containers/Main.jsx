import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Menu from '../components/Menu'
import Home from '../components/Home'
import Detail from '../components/Detail'
import Delete from '../components/Delete'
import EditionForm from '../components/EditionForm'


export default ()=>{   

        return  <div className="Main" style={{display:'flex',flexDirection:'column'}}>     
                    <Menu></Menu>
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/showdetail" render={(props)=><Detail {...props} ></Detail>}></Route>
                        <Route path="/delete" render={(props)=><Delete {...props} ></Delete>}></Route>
                        <Route path="/editionformulary" render={(props)=><EditionForm {...props} ></EditionForm>}></Route>
                        
                    </Switch>                
                </div>     

}