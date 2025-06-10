import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export function NotFound() {
  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <NavLink
        to="/"
        style={{ color: "var(--cool-indigo)", fontWeight: "bold" }}
      >
        Go back home
      </NavLink>
    </div>
  );
}
