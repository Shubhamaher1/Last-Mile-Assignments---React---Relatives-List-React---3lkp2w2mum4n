import React, { Component, useState } from "react";
import "../styles/App.css";
let list = ["shubham", "aher", "party"];
function App() {
  const [data, setdata] = useState(list);
  return (
    <div className="main">
      <ol key={"relativeList"}>
        {data.map((ele, idex) => {
          let no = idex + 1;
          return <li key={"relativeListItem" + no}>{ele}</li>;
        })}
      </ol>
    </div>
  );
}

export default App;
