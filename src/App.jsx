//import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="left-content">
          <img
            src="https://avatars.githubusercontent.com/u/53617138?v=4"
            alt=""
          />
        </div>
        <div className="right-content">
          <p className="read-the-docs">Em construção...</p>
        </div>
      </div>
    </>
  );
}

export default App;
