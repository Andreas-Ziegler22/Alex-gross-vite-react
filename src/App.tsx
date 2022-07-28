import { useState } from "react";
import { Tweet } from "./components/tweet";
import { AppRoutes } from "./Routes";

import "./App.css";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet 1",
    "Tweet 2",
    "Tweet 3",
    "Tweet 4",
  ]);

  function createTweet() {
    setTweets([...tweets, "Tweet 5"]);
  }
  return (
    // <AppRoutes />
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "#3498db",
          border: 0,
          borderRadius: "6px",
          cursor: "pointer",
          fontFamily: "inherit",
          padding: "8px 30px",
          margin: "5px",
          color: "#fff",
        }}
      >
        add tweet
      </button>
    </div>
  );
}

export default App;
