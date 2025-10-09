import React from "react";
import { useRef } from "react";
function App() {
  let name=useRef();
  let password=useRef();
  let phone=useRef();
  let image=useRef(); 

  function Register(e){
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
    console.log(phone.current.value);
    console.log(image.current);
  }
  return (
    <div className="App">
      <form onSubmit={Register}>
        <label>Name:</label>
        <input type="text" ref={name} />
        <label>Password:</label>
        <input type="password" ref={password} />
        <label>Phone:</label>
        <input type="number" ref={phone} />
        <label>Image (upload):</label>
        <input type="text" ref={image} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default App;
