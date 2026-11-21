import CopyEmailButton from "../components/CopyEmailButton";
import { getConfigData } from "../data/configReader";

export default function About() {
  const configData = getConfigData();
  const about = configData.aboutData[0];
  const isAvailable = configData.status === "on";
  const paintingName = about.favouritePainting.replace(" (hover over to see it)", "");

  return (
    <article className="markdown-document">
      <h1 className="markdown-title">
        <span className="syntax-heading">#</span> about.md
      </h1>
      <p>
        (Mostly) backend developer from {about.from}. I hate letting the computer win.
      </p>
      <h2 className="markdown-subtitle">
        <span className="syntax-heading">##</span> A few details
      </h2>
      <dl className="markdown-details">
        <dt>Interests</dt>
        <dd>{about.interests}</dd>
        <dt>Currently</dt>
        <dd>{about.now}</dd>
        <dt>On the wall</dt>
        <dd>
          <a href={about.favouritePaintingUrl} target="_blank" rel="noopener noreferrer">
            {paintingName} ↗
          </a>
        </dd>
      </dl>
      <div className="home-actions">
        <a
          className="text-link"
          href={configData.hireMeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn ↗
        </a>
        <CopyEmailButton />
      </div>
    </article>
  );
}
