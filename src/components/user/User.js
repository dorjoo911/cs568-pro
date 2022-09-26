// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";

// import Posts from "../post/Posts";
import Test from "../Test";
import Users from "./Users";

export default function User() {
  // const { userId } = useParams();

  return (
    <div>
      {/* <Test /> */}
      <Users />
      {/* <Link to="/users/:id">User info</Link>
      <h2>One user</h2>
      <Link to="/users">All users</Link>
      <p>User id: {userId}</p>
      <Posts /> */}
    </div>
  );
}
