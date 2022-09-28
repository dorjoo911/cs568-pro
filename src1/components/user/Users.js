// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import withUser from "./withUser";
import UserItem from "./UserItem";
import { Role } from "../Role";

function Users({ users, deleteUser, editUserInfo }) {
  const id = localStorage.getItem("token");
  let role = "";
  return (
    <div style={{ padding: "50px" }}>
      <Role.Consumer users={users}>
        {(value) => (
          <>
            {value.role === role ? (
              <div>
                <button>
                  <Link to={`/register`}>Add new user</Link>
                </button>
              </div>
            ) : (
              <div style={{ color: "white", textShadow: "2px 2px #ff0000" }}>
                {value.role}
              </div>
            )}

            <UserItem>
              <table style={{ color: "yellow", textShadow: "2px 2px black" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {users.map((u) => {
                  role = u.role;
                  const content = (
                    <tbody key={u._id + 6}>
                      <tr key={u._id + 0}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.age}</td>
                        <td>
                          {value.role !== role ? (
                            <>
                              <button onClick={() => deleteUser(u._id)}>
                                kick
                              </button>
                              <button onClick={() => editUserInfo(u._id)}>
                                <Link to={`/users/${id}/edit`}>edit</Link>
                              </button>
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  );
                  return content;
                })}
              </table>
            </UserItem>
            <button>
              <Link to={`/register`}>register</Link>
            </button>
          </>
        )}
      </Role.Consumer>
    </div>
  );
}
export default withUser(Users);
