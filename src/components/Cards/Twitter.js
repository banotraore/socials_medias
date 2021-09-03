import React from "react";
import TwitterLogo from "../../assets/Twitter_Bird.svg.png";

const Twitter = ({ tweet }) => {
  return (
    <div className="feature col">
      <div className="feature-icon">
        <img
          src={TwitterLogo}
          alt="Bootstrap"
          width="32"
          height="32"
          className="border border-white"
        />
      </div>
      <h2>{tweet.username}</h2>
      <p>{tweet.tweet}</p>
    </div>
  );
};

export default Twitter;
