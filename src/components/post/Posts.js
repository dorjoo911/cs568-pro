import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/posts`);
      setposts(res.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {posts.map((p) => (
        <li key={p._id}>
          <b>{p.post}</b>
        </li>
      ))}
    </ul>
  );
}
