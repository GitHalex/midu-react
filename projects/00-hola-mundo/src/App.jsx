import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing={true}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="kikobeats"
        name="Kiko Beats"
      />
      <TwitterFollowCard
        isFollowing={true}
        userName="HalexCalBer"
        name="Halex cal ber"
      />
    </section>
  );
}
