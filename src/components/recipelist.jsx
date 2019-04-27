import React, { Component } from 'react'
import Recipe from "./recipe";
import RecipeSearch from './recipesearch'
export default class Recipelist extends Component {

  render() {
        const {recipes,handleDetails,value,handleSubmit,handleChange}=this.props
        // console.log(recipes.length);
        
    return (
      <React.Fragment>
        
          <RecipeSearch value={value} handleChange={handleChange} 
          handleSubmit={handleSubmit} />
          <div className="container my-5">
              {/* {title} */}
              <div className="row">
                  <div className="col-10 mx-auto 
                  col-md-6 text-center text-uppercase mb-3">
                    <h1 className="text-slanted">
                        recipe list
                    </h1>
                  </div>

                  <div className="row">
                      {recipes.map((recipe,index)=>{
                          {/* console.log(recipe);
                          console.log(index); */}
                          
                          return(
                              <Recipe key={recipe.recipe_id}
                               recipe={recipe} 
                               handleDetails={
                                ()=>handleDetails(0,recipe.recipe_id)} />
                          )

                      })}
                  </div>
              </div>
          </div>


      </React.Fragment>
    )
  }
}
