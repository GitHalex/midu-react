import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  const [name, setName] = useState("midudev");

  console.log("render with name: ", name);

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={name}
        name="Miguel Ángel Durán"
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="kikobeats"
        name="Kiko Beats"
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Alex"
        name="Pablo Perez"
      />

      <button onClick={() => setName("Alex")}>Cambio Nombre</button>
    </section>
  );
}
