import { useEffect, useState } from "react";
import axios from "axios";
import css from "./Post.css";

export default function Posts() {
  const [posts, setposts] = useState([]);
  //   let users = [];
  useEffect(() => {
    (async () => {
      const res = await axios.get(`/posts`);
      const reversed = res.data.reverse();
      setposts(reversed);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   axios.get("/users").then((response) => {
  //     users = [...response.data];
  //   });
  const id = localStorage.getItem("token");
  const name = localStorage.getItem("nameToken");
  return (
    <div style={{ textAlign: "left", padding: "30px" }}>
      <hr />
      <h3 style={{ textAlign: "center" }}>PUBLIC CHATBOX</h3>
      <div className="PostBox">
        <ul style={{ listStyleType: "none" }}>
          {posts.map((p) => (
            <li key={p._id}>
              <b>
                {id === p.userId ? `${name} says: - ` : `- User says: - `}
                {p.post}
              </b>
            </li>
          ))}
        </ul>
      </div>

      <hr />
    </div>
  );
}
