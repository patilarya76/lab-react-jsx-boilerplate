import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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
  return data;  //data is array of objects
}
let data=imageData()
function App() {
   //find using let how can styling be applied
  //  let galleryStyle={
  //  display:"grid",
  //  }
   let styleMydiv={
    display:"grid",
    gridTemplateColumns:"repeat(2,1fr)",
    marginLeft:"200px",
    
   }


   return(
    <>
    <h1 style={{textAlign:'center'}}>Kalvium Gallery</h1>
    <div style={styleMydiv}>
      <img  src={data[0].img} alt="" width={"500px"}/>
      <img src={data[1].img} alt="" width={"500px"}/>
      <img style={{marginTop:"50px"}} src={data[2].img} alt="" width={"500px"}/>
      <img style={{marginTop:"50px"}} src={data[3].img} alt="" width={"500px"}/>
    </div>
    
    </>
   )
}

export default App;
