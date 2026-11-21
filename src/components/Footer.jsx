import { getConfigData } from "../data/configReader";
import Social from "./Social";

export default function Footer() {
  const isAvailable = getConfigData().status === "on";

  return (
    <footer className="status-bar">
      <div className="status-bar-left">
        <span className="status-site">What are you doing down here</span>
        <span className="status-divider" aria-hidden="true">
          /
        </span>
        <span className={`status-availability${isAvailable ? "" : " busy"}`}>
          {isAvailable ? "Available for work" : "Currently busy"}
        </span>
      </div>
      <Social />
    </footer>
  );
}
