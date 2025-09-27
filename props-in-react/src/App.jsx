import { useState } from "react";
import LandingPase from "./Components.LandingPase"
function App(){
  let[num,setNum]=useState(0);
  return(
    <div className="App">
      <button onClick={()=>{setNum(++num)}}>ADD</button>
       <button onClick={()=>{setNum(--num)}}>ADD</button>
       <h1>The value of Number in App : {num}</h1>
       <LandingPase data={num}/>
    </div>
  )
}