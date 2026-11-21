import strawberryPlayground from "../assets/projects/strawberry-playground.png";
import { getConfigData } from "../data/configReader";

function renderProjectVisual(project, index) {
  if (project["project-visual"] === "strawberry") {
    return (
      <figure className="project-art">
        <img
          className="project-screenshot"
          src={strawberryPlayground}
          alt="Strawberry Playground running the expression 2 times (3 plus 4) and returning 14."
        />
        <figcaption className="figure-caption">
          <span>Strawberry Playground</span>
          <span>Go / WebAssembly</span>
        </figcaption>
      </figure>
    );
  }

  if (project["project-visual"] === "migra") {
    return (
      <figure className="project-art diagram-art">
        <figcaption className="diagram-caption">Migration workflow</figcaption>
        <div className="diagram-flow">
          <div className="diagram-step">
            <strong>Source files</strong>
            <span>CSV · XLS · XLSX</span>
          </div>
          <span className="diagram-arrow" aria-hidden="true" />
          <div className="diagram-step">
            <strong>Field map</strong>
            <span>Suggest · Validate</span>
          </div>
          <span className="diagram-arrow" aria-hidden="true" />
          <div className="diagram-step">
            <strong>Shopify CSV</strong>
            <span>Preview · Export</span>
          </div>
        </div>
        <div className="diagram-footnote">
          <span>{String(index + 1).padStart(2, "0")} — Data flow</span>
          <span>Migra</span>
        </div>
      </figure>
    );
  }

  return (
    <figure className="project-art diagram-art">
      <figcaption className="diagram-caption">Security operations workflow</figcaption>
      <div className="diagram-flow">
        <div className="diagram-step">
          <strong>Inventory</strong>
          <span>Endpoints · Packages</span>
        </div>
        <span className="diagram-arrow" aria-hidden="true" />
        <div className="diagram-step">
          <strong>OSV match</strong>
          <span>Package versions</span>
        </div>
        <span className="diagram-arrow" aria-hidden="true" />
        <div className="diagram-step">
          <strong>Investigate</strong>
          <span>Findings · Audit</span>
        </div>
      </div>
      <div className="diagram-footnote">
        <span>{String(index + 1).padStart(2, "0")} — Triage flow</span>
        <span>Komra</span>
      </div>
    </figure>
  );
}

export default function Projects() {
  const { projects } = getConfigData();

  return (
    <article className="markdown-document projects-document">
      <h1 className="markdown-title">
        <span className="syntax-heading">#</span> projects.md
      </h1>
      <p className="document-intro">
        A few systems I’ve been building, with notes on how they work.
      </p>
      <div className="case-study-list">
        {projects.map((project, index) => {
          const projectId = project["project-name"].toLowerCase();
          return (
            <section className="case-study" id={projectId} key={projectId}>
              <p className="project-type">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {project["project-type"]}
              </p>
              <h2 className="markdown-subtitle">
                <span className="syntax-heading">##</span> {project["project-name"]}
              </h2>
              <p>{project["project-desc"]}</p>
              <p className="technical-note">
                <span className="syntax-key">Technical note:</span>{" "}
                {project["project-note"]}
              </p>
              <div className="project-stack" aria-label="Technology">
                {project["project-stack"].map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              {renderProjectVisual(project, index)}
              <p className="project-links">
                <a href={project["project-source-url"]} target="_blank" rel="noopener noreferrer">
                  Source on GitHub ↗
                </a>
                {project["project-demo-url"] && (
                  <a href={project["project-demo-url"]} target="_blank" rel="noopener noreferrer">
                    Live playground ↗
                  </a>
                )}
              </p>
            </section>
          );
        })}
      </div>
    </article>
  );
}
