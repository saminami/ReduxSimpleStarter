import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyB4zLuS4v4y577DnhNq7CxiVT7YftUV8ws";

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}



//Take this compent's HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
