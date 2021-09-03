import React from "react";
import FacebookLogo from "../../assets/240px-Facebook_f_logo_(2019).svg.png";

const Facebook = ({ post }) => {
  return (
    <div className="col d-flex align-items-start">
      <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
        <img
          src={FacebookLogo}
          alt="Bootstrap"
          width="32"
          height="32"
          className="border border-white"
        />
      </div>
      <div>
        <h2>{post.name}</h2>
        <p>{post.status}</p>
      </div>
    </div>
  );
};

export default Facebook;
