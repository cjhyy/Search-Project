import React from 'react';

import './App.css';
import {recipes} from './tempList'
import Recipelist from './components/recipelist'
import RecipeDetails from './components/recipedetail'
class App extends React.Component{
  state={
    recipes,
    url:'https://www.food2fork.com/api/search?key=c9793da593c3cc83e21794216b8b96d3',
    base_url:'https://www.food2fork.com/api/search?key=c9793da593c3cc83e21794216b8b96d3',
    details_id:35375,
    pageIndex:1,
    search:'',
    query:'&q=',
  }
  async getRecipes(){
    try{
       const data=await fetch(this.state.url)
    const jsonData = await data.json()
    this.setState({
      recipes:jsonData.recipes
    })

    }catch(error){
      console.log(error);
      
    }
   
  }
  componentDidMount(){
    this.getRecipes()
  }
  displaypage=(index)=>{
        switch(index){
          default:
          case 1:
          return (  <Recipelist recipes={this.state.recipes} handleDetails={this.handleDetails} 
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          /> )
          case 0:
          return (<RecipeDetails id={this.state.details_id}  handleIndex={this.handleIndex}/>  )
        }
  }
  handleIndex= (index) =>{
    this.setState({
      pageIndex:index
    })
  }
  handleDetails = (index,id) =>{
    this.setState({
      pageIndex:index,
      details_id:id,
    })
  }
  handleChange=(e)=>{
    
    this.setState({
      search:e.target.value,
    },()=>{
      console.log(this.state.search);
      
    })     
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const{base_url,query,search} =this.state
    this.setState(()=>{
      return {url:`${base_url}${query}${search}`,search:''}
    },()=>{
      this.getRecipes();
    })
  }
  render(){  
    // console.log(this.state.recipes);
 
    return (
  <React.Fragment>
  {this.displaypage(this.state.pageIndex) }
  {/* <Recipelist recipes={this.state.recipes} handleDetails={this.handleDetails} />
  
  <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex} /> */}
  </React.Fragment>
  );}

}

export default App;
