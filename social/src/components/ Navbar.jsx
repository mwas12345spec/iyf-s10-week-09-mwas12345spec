import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>CommunityHub</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}