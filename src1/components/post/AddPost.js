import { useState } from "react";

export default function AddPost({ addposts }) {
  const [newpost, setNewpost] = useState([]);
  const [success, setsuccess] = useState(false);

  function changed(e) {
    setsuccess(false);
    setNewpost(e.target.value);
  }

  function addpostAndClear() {
    addposts(newpost);
    setNewpost("");
    setsuccess(true);
  }

  return (
    <div>
      <h4 style={{ color: "yellow" }}>please, be a nice ...</h4>
      <input value={newpost} onChange={(event) => changed(event)} />
      <button onClick={addpostAndClear}>Add</button>
      {success && <p>Successfully posted</p>}
      <hr />
    </div>
  );
}
