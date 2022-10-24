import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      Tere tulemast maailma, Niperbund! <br />
      <button onClick={() => alert("Jalanõuikaldus, tule hiljem tagasi!")}>
        Sisene siit
      </button>
    </div>
  );
}

export default App;
