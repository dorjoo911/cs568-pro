import { Link } from "react-router-dom";

export default function Panel() {
  return (
    <div>
      <button>
        <Link to="/login">Login</Link>
      </button>{" "}
      <button>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
}
