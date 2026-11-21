import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", file: "home.md", icon: "M", end: true },
  { to: "/projects", file: "projects.md", icon: "M" },
  { to: "/achievements", file: "achievements.md", icon: "M" },
  { to: "/about", file: "about.md", icon: "M" },
  { to: "/resume", file: "resume.pdf", icon: "PDF" },
];

export default function Navbar() {
  return (
    <nav className="tab-bar" aria-label="Portfolio files">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.end}
          className={({ isActive }) => `tab${isActive ? " active" : ""}`}
        >
          <span className={`tab-icon${tab.icon === "PDF" ? " tab-icon-pdf" : ""}`} aria-hidden="true">
            {tab.icon}
          </span>
          {tab.file}
        </NavLink>
      ))}
    </nav>
  );
}
