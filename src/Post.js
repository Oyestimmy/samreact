import React, {Component} from 'react'
import axios from 'axios'
class Posts extends Component{
 constructor (){
   super()
   this.state = {
     posts:[]
   }
 }
 componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(res=>
     this.setState({
     posts:res.data.slice(0,20)
     })
   )
   .catch(err=>console.log(err))
 }
  render(){
    console.log(this.state.posts)
    return(
      <div>

      </div>
    )
  }
}
  export default Posts
