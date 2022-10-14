import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [userId, setUserId] = useState(null)

  const addUser = () => {
    const newUser = {
      name,
      email,
      password
    }
    axios
      .post('http://localhost:4000/newUser', newUser)
      .then((res) => {
        console.log(res.data)
        setUserId(res.data.id)
      })
  };
  const addProduct = () => {
    if(userId === null) {
      alert("must be logged in")
      return
    }
    const newProduct = {
      title,
      price,
      userId
    }
    axios
      .post('http://localhost:4000/newProduct', newProduct)
      .then((res) => {
        console.log(res.data)
      })
  };

  const findUser = () => {
    axios
      .get('http://localhost:4000/users/1')
      .then((res) => {
        console.log(res.data)
      })
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
      case "email":
        setEmail(e.target.value);
      case "password":
        setPassword(e.target.value);
      case "title":
        setTitle(e.target.value);
      case "price":
        setPrice(e.target.value);
      default:
        console.log('nothing changed')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>{userId ? `User Id: ${userId}` : "Not Logged In"}</h1>
        <h2>Add a User</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={addUser}>Submit</button>

        <h2>Add a Product</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />
        <button onClick={addProduct}>Submit</button>
        <button onClick={findUser}>Find products</button>
      </header>
    </div>
  );
}

export default App;
