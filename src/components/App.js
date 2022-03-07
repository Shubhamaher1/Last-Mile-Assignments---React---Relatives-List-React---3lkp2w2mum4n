import React, { Component, useState } from "react";
import "../styles/App.css";
let list = ["shubham", "aher", "party"];
function App() {
  const [data, setdata] = useState(list);
  return (
    <div className="main">
      <ol>
        {data.map((ele, idex) => {
          return <li key={"relativeListItem" + idex + 1}>{ele}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
