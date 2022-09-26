import { useEffect, useState } from "react";
import axios from "axios";

export default function withUser(Comp) {
  function NewComp() {
    const [users, setusers] = useState([]);

    function deleteUser(id) {
      setusers(users.filter((p) => p.id !== id));
      //   axios.delete(`/posts/${id}`).then((res) => console.log(res));
    }

    useEffect(() => {
      async function fetchPosts() {
        const res = await axios.get("/users");
        setusers(res.data);
      }
      fetchPosts();
    }, []);

    return <Comp users={users} deleteUser={deleteUser} />;
  }

  return NewComp;
}
