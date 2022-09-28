// import { useState } from "react";
// import axios from "axios";

// const Edit = () => {
//   const [state, setstate] = useState({});

//   const edit = async (e) => {
//     e.preventDefault();

//     await axios.post("/users", {
//       name: name,
//       email: email,
//       password: password,
//       confPassword: confPassword,
//       age: age,
//     });
//   };
// };

// export default Edit;
// <Example user={user} />

// const Example = (props) => {
// const [bio, setBio] = useState(props.user.bio);

// const handleChangeBio = (event) => {
//     console.log(event.currentTarget.value);
//     setBio(event.currentTarget.value);
// }

//  return (
//    <label>Bio</label>
//     <TextArea
//     id="bio"
//     onChange={handleChangeBio}
//     value={bio}
//     />
//     )
// }
