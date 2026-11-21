import { Link } from "react-router-dom";
import { getConfigData } from "../data/configReader";
import CopyEmailButton from "./CopyEmailButton";

export default function Profile() {
  const configData = getConfigData();
  const isAvailable = configData.status === "on";

  return (
    <article className="markdown-document">
      <p className="file-path">~/portfolio/home.md</p>
      <h1 className="markdown-title">
        <span className="syntax-heading">#</span> {configData.name}
      </h1>
      <p>
        Backend developer from {configData.aboutData[0].from}, interested in the
        systems behind software.
      </p>
      <p>
        Waiting for my Master's to start..
      </p>
      <h2 className="markdown-subtitle">
        <span className="syntax-heading">##</span> Project index
      </h2>
      <ul className="markdown-list">
        {configData.projects.map((project) => {
          const projectId = project["project-name"].toLowerCase();
          return (
            <li key={projectId}>
              <Link to={`/projects#${projectId}`}>{project["project-name"]}</Link>
              <span className="list-description"> — {project["project-type"]}</span>
              <a
                className="inline-source-link"
                href={project["project-source-url"]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project["project-name"]} source code on GitHub`}
              >
                ↗
              </a>
            </li>
          );
        })}
      </ul>
      <CopyEmailButton />
    </article>
  );
}
