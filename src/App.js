import React from 'react'
import Home  from './Home'
import About from './About'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import Post from './Post'

import {Route,  Link, Switch, NavLink} from 'react-router-dom'


const App = ()=>{
return(
  <div>
     <ul>
       <li><NavLink to='/'>Home </NavLink></li>
       <li><Link to='/about'>About </Link></li>
       <li><Link to='/contact'>Contact </Link></li>
       <li><Link to='/post'>Posts </Link></li>
     </ul>

     <Switch>
     <Route exact path='/' component={Home} />
     <Route path='/about' component={About} />
     <Route path='/contact' component={Contact} />
     <Route component={PageNotFound} />

     </Switch>
  </div>
)
}

export default App
