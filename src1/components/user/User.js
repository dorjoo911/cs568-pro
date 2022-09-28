// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Posts from "../post/Posts";
import Header from "../Header";
import AddPost from "../post/AddPost";
import axios from "axios";

export default function User() {
  const userName = window.localStorage.getItem("uName");
  const [posts, setposts] = useState(null);

  useEffect(() => {
    axios.get("/posts", posts).then((response) => {
      setposts(response.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function deleteposts(posts) {
    const newposts = posts.filter((t) => t.posts !== posts);
    setposts(newposts);
  }

  function addposts(newpost) {
    const id = localStorage.getItem("token");
    console.log(id + "addpost");
    axios
      .post("/posts", {
        post: newpost,
        userId: id,
      })
      .then((response) => {
        setposts(response.data);
      });
  }

  const editposts = async (posts) => {
    const index = posts.findIndex((t) => t.posts === posts);
    alert(index);
  };

  const Logout = () => {
    window.localStorage.clear();
  };

  const theURL = "https://test-3d6a9.firebaseapp.com";
  const width = 420;
  const height = 315;

  function popWindow() {
    setTimeout(function () {
      window.open(
        theURL,
        "newWindow",
        "toolbar=no,menubar=no,resizable=no,scrollbars=no,status=no,location=no,width=" +
          width +
          ",height=" +
          height
      );

      // setTimeout(function () {
      //   newWindow.close();
      // }, 3000);
    }, 5000);
  }
  const name = localStorage.getItem("nameToken");
  return (
    <div>
      <Header headerText={`Please, Welcome ${name}, Enjoy your Chat-Box !!!`} />
      <button onClick={Logout}>
        <Link to="/">Logout</Link>
      </button>{" "}
      <button>
        <Link to="/users">All users</Link>
      </button>{" "}
      <button>
        <Link to={`/users/${localStorage.getItem("token")}/info`}>
          User info
        </Link>
      </button>
      <div>
        <Posts />
        <Link to={popWindow()} />
      </div>
      <AddPost
        posts={posts}
        deleteposts={deleteposts}
        addposts={addposts}
        editposts={editposts}
      />
    </div>
  );
}
