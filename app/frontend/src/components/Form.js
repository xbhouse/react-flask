import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { "username": user, "email": email };

    const url = "http://localhost:5000/api/users";
    axios.post(url, data)
    .then(response => {console.log(response)});

    clearInput();
  }

  const handleUserChange = (e) => {
    setUser(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const clearInput = () => {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
  }



  return (
    <div class="form-container">
      <form class="form-custom">
        <div class="row">
          <div class="col">
            <div class="mb-3">
            <label htmlFor="username" class="form-label">SOEID</label>
            <input type="text" class="form-control" id="username" onChange={handleUserChange}></input>
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
            <label htmlFor="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" onChange={handleEmailChange}></input>
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Add user</button>
      </form>
    </div>
  )
}

export default Form;