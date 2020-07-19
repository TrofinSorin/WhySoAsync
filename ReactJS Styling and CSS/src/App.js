import React from "react";
import "./App.scss";
import ScssStyleSheets from "./components/ScssStylesheets/ScssStylesheets";
import InlineStyles from "./components/InlineStyles/InlineStyles";
import ScssModules from "./components/ScssModules/ScssModules";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {/* <ScssStyleSheets primary={false}></ScssStyleSheets> */}
        {/* <InlineStyles></InlineStyles> */}
        <ScssModules></ScssModules>
      </main>
    </div>
  );
}

export default App;
