import React, { useEffect, useState } from "react";
import "../styles/App.css";
const App = () => {
  let [data, setData] = useState("");

  useEffect(() => {
    if (!data) {
      setData(<p className="loading">loading</p>);
    }
    if (typeof data === "string") {
      if (data.includes("#")) {
        setData(
          <h1 style={{ fontWeight: "bold" }}> {data.split("#").join("")}</h1>
        );
      }
    }
  }, [data]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        onChange={(e) => setData(e.target.value)}
      ></textarea>
      <div className="preview">
        <p>{data}</p>
      </div>
    </div>
  );
};

export default App;
