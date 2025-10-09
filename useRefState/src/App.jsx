import React, { useRef } from "react";

function App() {
  let name = useRef();
  let password = useRef();
  let h1 = useRef();
  let image = useRef(); // file input
  let preview = useRef(); // actual image tag

  function login(e) {
    e.preventDefault();
    console.log(name.current.value);
    console.log(password.current.value);
    console.log(image.current);
    console.log(h1.current);

    h1.current.style.color = "red";

    if (name.current.value === "sayan" && password.current.value === "1234") {
      alert("login successful");
      h1.current.innerText = "Welcome Sayan";
      preview.current.src = "https://www.purestorage.com/content/dam/purestorage/knowledge/oracle-database.jpg.imgw.720.720.jpg";
    } else {
      alert("login failed");
    }
  }

  return (
    <div className="App">
      <form onSubmit={login}>
        <h1 ref={h1}></h1>
        <label>Name:</label>
        <input type="text" ref={name} />
        <label>Password:</label>
        <input type="password" ref={password} />
        <label>Image (upload):</label>
        <input type="file" ref={image} />
        <button type="submit">Login</button>
      </form>
      <img ref={preview} alt="Preview" style={{ marginTop: "20px", width: "300px" }} />
    </div>
  );
}

export default App;
