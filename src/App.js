import React, { useEffect, useState } from "react";

import axios from "axios";
import Twitter from "./components/Cards/Twitter";
import Facebook from "./components/Cards/Facebook";
import Instagram from "./components/Cards/Instagram";
import "./App.scss";

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [facebookPosts, setFacebookPosts] = useState([]);
  const [instagramPictures, setInstagramPictures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/feeds")
      .then((response) => {
        setTweets(
          response && response.data && response.data.twitter
            ? response.data.twitter
            : "undefined"
        );
        setFacebookPosts(
          response && response.data && response.data.facebook
            ? response.data.facebook
            : "undefined"
        );
        setInstagramPictures(
          response && response.data && response.data.instagram
            ? response.data.instagram
            : "undefined"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Twitter</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {Array.isArray(tweets) && tweets.length < 1 && (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {tweets &&
            Array.isArray(tweets) &&
            tweets.map((tweet, index) => <Twitter key={index} tweet={tweet} />)}
        </div>
        <div>
          {tweets === "undefined" && (
            <h4>Server error. Please reload the page</h4>
          )}
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">Facebook</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {Array.isArray(facebookPosts) && facebookPosts.length < 1 && (
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {facebookPosts &&
            Array.isArray(facebookPosts) &&
            facebookPosts.map((post, index) => (
              <Facebook key={index} post={post} />
            ))}
        </div>
        <div>
          {facebookPosts === "undefined" && (
            <h4>Server error. Please reload the page</h4>
          )}
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Instagram</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          {Array.isArray(instagramPictures) && instagramPictures.length < 1 && (
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}

          {instagramPictures &&
            Array.isArray(instagramPictures) &&
            instagramPictures.map((post, index) => (
              <Instagram key={index} post={post} index={index} />
            ))}
        </div>
        <div>
          {instagramPictures === "undefined" && (
            <h4>Server error. Please reload the page</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
