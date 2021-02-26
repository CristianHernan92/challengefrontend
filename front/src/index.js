import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import Main from './containers/Main'

ReactDom.render(
        <BrowserRouter>
            <Main></Main>
        </BrowserRouter>, 
document.getElementById("app"))