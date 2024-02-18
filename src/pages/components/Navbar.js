import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fonction de déconnexion
  const handleLogout = () => {
    // Code pour déconnexion
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link href="/">Anjara</Link>
      </h1>
      <ul className="navList">
        <li className="navItem">
          <Link href="/">HOME</Link>
        </li>
        <li className="navItem">
          <Link href="#type">TYPE</Link>
        </li>
        <li className="navItem">
          <Link href="/">SCHEDULE</Link>
        </li>
        <li className="navItem">
          <Link href="/contact">COACH</Link>
        </li>
      </ul>
      <div className="authentification">
        {isAuthenticated ? (
          <Link className="btn" href="/profile">
            PROFIL
          </Link>
        ) : (
          <Link className="btn" href="/login">
            LOGIN
          </Link>
        )}
      </div>
    </nav>
  );
}
