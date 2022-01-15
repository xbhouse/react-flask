import React, { useState } from "react";
import axios from "axios";

const Button = (props) => {
  const [data, setData] = useState([]);

  function handleClick() {
    var url = "http://localhost:5000/api/" + props.param;
    axios.get(url)
    .then((res) => setData(JSON.stringify(res.data)));
  }

  return (
    <div>
      <button onClick={handleClick}>Get {props.param}</button>
      <p>{data}</p>
    </div>
  )
}

export default Button;