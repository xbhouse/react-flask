import React, { useState } from "react";

const LikeButton = (props) => {
  const [numLikes, setNumLikes] = useState(0);

  // this only affects the UI for now
  const incrementLikes = () => {
    setNumLikes(numLikes + 1);
  }

  return (
    <div>
      <button onClick={incrementLikes}>Likes: {numLikes}</button>
    </div>
  )
}

export default LikeButton;