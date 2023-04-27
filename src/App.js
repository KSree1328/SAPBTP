import React from "react";
// import  { useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
import "./App.css";


export default function App(){
 return(
  <div className="wrapper">
   <Card 
   img="salad.jpg"
   title="The Everyday Salad" 
   description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"/>
   
   <Card 	
   img="salad.jpg"
   title="The Everyday Salad" 
   description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"/>


   <Card 
   img="salad.jpg"
   title="The Everyday Salad" 
   description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"/>


   <Card 
   img="salad.jpg"
    title="The Everyday Salad" 
   description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"/>
  </div>
 )
}


function Card(props){
  return(
    <div className="card">
      <div>
        <button>Add</button>
      </div>
      <div className="card__body">
        <img src={props.img} alt="abc" ></img>
        <h2 className="card_title">{props.title}</h2>
        <p className="card_description">{props.description}</p>
      </div>
      <button className="card_btn">View Recipe</button>
    </div>
  )
}
