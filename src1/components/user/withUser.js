import { useEffect, useState } from "react";
import axios from "axios";

export default function withUser(Comp) {
  function NewComp() {
    const [users, setusers] = useState([]);

    function deleteUser(id) {
      const afterDeleted = users;
      afterDeleted.splice(
        afterDeleted.findIndex((u) => u._id === id),
        1
      );
      setusers([...afterDeleted]);
      axios.delete(`/posts/${id}`).then((res) => console.log(res));
    }

    const editUserInfo = (id) => {
      // deleteUser(id)
      console.log("delete");
      console.log("register again");
    };

    useEffect(() => {
      async function fetchPosts() {
        const res = await axios.get("/users");
        setusers(res.data);
      }
      fetchPosts();
    }, []);

    return (
      <Comp users={users} deleteUser={deleteUser} editUserInfo={editUserInfo} />
    );
  }

  return NewComp;
}
