import React, { useEffect, useState } from "react";
import YtContext from "./YtContext";

const YtProvider = (props) => {
  const [videos, setVideos] = useState([]);
  const [vidId, setVidId] = useState("");
  const [vidstats,setVidStats]=useState([])
  const api_key = "AIzaSyCvLFXu8-uNMTfjmRsK1aphYch6U6SIscg";

  useEffect(() => {
    async function videosList() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${api_key}&chart=mostPopular&part=snippet&maxResults=20&regionCode=IN`
        );
        const res = await response.json();
        const response2=await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${api_key}&chart=mostPopular&part=statistics&maxResults=20&regionCode=IN`)
        const res2 = await response2.json()
        setVidStats(res2.items)
        setVideos(res.items);
        // console.log(vidstats)
      } catch (err) {
        console.log(err, "error");
      }
    }
    videosList();
  }, [vidId]);


      async function playVideo(videoId) {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?&part=statistics,snippet&id=${videoId}&key=${api_key}`
          );
          const dat = await response.json();
        //   console.log(dat.items[0]);
          setVidId(dat.items[0])
        //   console.log(vidId)
        } catch (err) {
          console.log(err, "error");
        }
      }
      

  return (
    <YtContext.Provider value={{ videos, playVideo,setVidId,vidId,vidstats}}>
      {props.children}
    </YtContext.Provider>
  );
};

export default YtProvider;
