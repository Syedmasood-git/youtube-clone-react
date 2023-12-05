import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import YtContext from "../context/YtContext";
const PlayVideo = () => {
  const { videos } = useContext(YtContext);
  const { videoId } = useParams();
  console.log(videoId);
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="play">
      <iframe width="420" height="315" src={url}></iframe>
    </div>
  );
};

export default PlayVideo;
