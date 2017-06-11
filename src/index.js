import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search"

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";

const API_KEY = "AIzaSyB4zLuS4v4y577DnhNq7CxiVT7YftUV8ws";

// Create a new component. This component should produce some HTML

class App extends Component{
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "pepe"}, (videos) =>{
      // sanme as this.setState({videos : videos});
      this.setState({ videos });
    });

  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}


//Take this compent's HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
