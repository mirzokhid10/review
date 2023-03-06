import React from "react";
import "./App.css";
import Review from "./Review";

function App() {
  return (
    <main className="App">
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review />
    </main>
  );
}

export default App;
