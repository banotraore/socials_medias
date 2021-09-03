import React from "react";
const Instagram = ({ post, index }) => {
  var baseUrl = `https://source.unsplash.com/600x900/?sig=${index}/&${
    post.picture === "this one is of a cat" ? "cat" : post.picture
  }`;

  return (
    <div className="col">
      <div
        className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
        style={{
          backgroundImage: `url(${baseUrl})`,
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
            {post.picture}
          </h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="d-flex align-items-center me-3">
              <h3 style={{ fontWeight: "bolder" }}>{post.username}</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
