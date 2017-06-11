import React from "react";
// the first argument has a property video, use that propery and create a variable called video
// {video}
const VideoListItem = ({video}) => {
  // const video = props.video;
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className ="vide-list media"> </div>

        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
    </li>
  );
};

export default VideoListItem;
