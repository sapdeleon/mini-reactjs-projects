import React from "react";
import emojipedia from "../data/emojipedia";
import Emoji from "./Emoji";

function createEmoji(props) {
  const { id, emoji, name, meaning } = props;
  return <Emoji key={id} emoji={emoji} name={name} meaning={meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
