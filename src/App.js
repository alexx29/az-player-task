import React from "react";
import Album from "./views/Album";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="album">
        <header className="album__header" />
        <Album />
      </div>
    </div>
  );
}

export default App;
