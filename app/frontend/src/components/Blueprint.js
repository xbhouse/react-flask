import React from "react";
import LikeButton from "./LikeButton";

const Blueprint = () => {

  return (
    <div class="card card-custom">
      <div class="card-body">
        <h5 class="card-title">App</h5>
        <p class="card-text">App description</p>
        <a href="#" class="btn"><LikeButton/></a>
      </div>
    </div>


  )
}

export default Blueprint;