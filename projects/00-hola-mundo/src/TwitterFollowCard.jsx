import { useState } from "react";

export function TwitterFollowCard({ formatUserName, userName, name }) {
  /* const state = useState(false)
  const isFollowing = state[0]
  const isFollowing = state[1] */

  const [isFollowing, setIsFollowing] = useState(false);

  console.log("[TwitterFollowCard] render with userName: ", userName);

  const imageSrc = `https://unavatar.io/x/${userName}`;
  // console.log(isFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={imageSrc}
        />
        <div className="tw-followCard-info">
          <strong> {name}</strong>
          <span className="tw-followCard-infoUse">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
