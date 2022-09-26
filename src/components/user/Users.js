import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import withUser from "./withUser";
import Role from "../Role";

function Users({ users, deleteUser }) {
  return (
    <div>
      <button>
        <Link to={`/register`}>Add new user</Link>
      </button>
      <ul>
        {users.map((p) => (
          <li key={p._id}>
            <b>{p.post}</b>
            <button key={p._id}>delete</button>
            <button key={p._id + p.age}>
              <Link to={`/users/${p._id}/edit`}>Edit user info</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default withUser(Users);
