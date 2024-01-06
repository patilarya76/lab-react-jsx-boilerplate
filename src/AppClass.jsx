import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
      this.data=this.imageData()
      console.log(this.data)

      let galleryStyle={
        textAlign:"centre"
      }

      let styleMydiv={
        display:"grid",
        gridTemplateColumns:"repeat(2,1fr)",
        marginLeft:"200px",
        
       }
    return(
      <>
      <h1 style={{textAlign:'center'}}>Kalvium Gallery</h1>
      <div style={styleMydiv}>
        <img src={this.data[0].img} alt="" width={"500px"}/>
        <img src={this.data[1].img} alt="" width={"500px"}/>
        <img style={{marginTop:"50px"}} src={this.data[2].img} alt="" width={"500px"}/>
        <img style={{marginTop:"50px"}} src={this.data[3].img} alt="" width={"500px"}/>
      </div>
      
      </>
    )
  }
}
