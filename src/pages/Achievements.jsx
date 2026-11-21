import { getConfigData } from "../data/configReader";

export default function Achievements() {
  const { social } = getConfigData();
  const profiles = social.filter((profile) => profile.achievement);

  return (
    <article className="markdown-document">
      <h1 className="markdown-title">
        <span className="syntax-heading">#</span> achievements.md
      </h1>
      <p>
        Cool stuff I try to improve.
      </p>
      <ul className="achievement-list">
        {profiles.map((profile) => {
          const platform = profile.icon === "FaCode" ? "LeetCode" : "Goodreads";

          return (
            <li className="achievement-item" key={profile.icon}>
              <div className="achievement-main">
                <span className="achievement-value">
                  {profile.achievement.value.toLocaleString("en-US")}
                </span>
                <div>
                  <h2>{profile.achievement.label}</h2>
                  <p>{profile.achievement.note}</p>
                </div>
              </div>
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                {platform} ↗
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
