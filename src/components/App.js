import React, { useEffect, useState } from "react";
import { marked } from "marked";
import "../styles/App.css";

const App = () => {
  console.log("App is rendering");
  let [data, setData] = useState(""); // Keep data as a string

  useEffect(() => {
    if (!data) {
      setData("loading"); // Display loading text when data is empty
    }
  }, [data]);

  return (
    <div className="app">
      <textarea
        className="textarea"
        placeholder="Enter markdown here..."
        onChange={(e) => setData(e.target.value)} // Update data with user input
      ></textarea>

      <div className="preview">
        {data === "loading" ? (
          <p className="loading">loading</p> // Show loading if data is "loading"
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: marked(data) }} // Parse markdown with marked
          ></div>
        )}
      </div>
    </div>
  );
};

export default App;
