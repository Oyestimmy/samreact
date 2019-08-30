import React from 'react'
import {Redirect} from 'react-router-dom'
const PageNotFound = ()=>{

  return(
     <div>
     <h2>PageNotFound</h2>
     <Redirect to='/' />
     </div>
  )
}

export default PageNotFound
