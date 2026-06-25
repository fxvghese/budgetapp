import { Link, useLocation } from "react-router";
import "./Navigation.css";

export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        💰 Budget App
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/budgets" className={isActive("/budgets") ? "active" : ""}>
            Budgets
          </Link>
        </li>
        <li>
          <Link to="/expenses" className={isActive("/expenses") ? "active" : ""}>
            All Expenses
          </Link>
        </li>
      </ul>
    </nav>
  );
}
