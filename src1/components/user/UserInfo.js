import withUser from "./withUser";
import Header from "../Header";

function UserInfo({ users }) {
  let token = localStorage.getItem("token");
  const user = users.find((u) => u._id === token);

  return (
    <div>
      <Header headerText={"User Info"} />
      <ul style={{ textAlign: "left" }}>
        <p>{user.role === "admin" ? "You are: Admin" : "You are: User"}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Status: {user.isDeleted ? "Disabled" : "Active"}</p>
      </ul>
    </div>
  );
}
export default withUser(UserInfo);
