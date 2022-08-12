// npm i react-router-dom framer-motion react-intersection-observer styled-components
import React from "react";
import Aboutus from "./pages/Aboutus";
import Globalstyle from "./components/Globalstyle";

function App() {
  return (
    <div className="App">
      <Globalstyle />
      <Aboutus />
    </div>
  );
}

export default App;
