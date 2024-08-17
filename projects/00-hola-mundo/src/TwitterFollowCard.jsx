export function TwitterFollowCard({
  formatUserName,
  userName,
  name,
  isFollowing,
}) {
  const imageSrc = `https://unavatar.io/x/${userName}`;
  console.log(isFollowing);
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
        <button className="tw-followCard-button">seguir</button>
      </aside>
    </article>
  );
}
