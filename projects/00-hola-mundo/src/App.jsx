import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={false}
        userName="kikobeats"
        name="Kiko Beats"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="pheralb"
        name="Pablo Hernandez"
      />
    </section>
  );
}
