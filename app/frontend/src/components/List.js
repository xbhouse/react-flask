import React, { useState } from "react";
import Blueprint from "./Blueprint.js";


const List = () => {

  return (
    <div class="blueprints-container">
      <div class="row">
        <div class="col-4">
          <Blueprint/>
        </div>
        <div class="col-4">
          <Blueprint/>
        </div>
        <div class="col-4">
          <Blueprint/>
        </div>
      </div>
    </div>
  )
}

export default List;
