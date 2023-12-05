import React, {  useEffect, useState } from 'react'
import { useContext } from 'react'
import YtContext from '../context/YtContext'
import { Link } from 'react-router-dom'
// import PlayVideo from './PlayVideo'

const Home = () => {
    const [vStats,setVstats]=useState([])
    const {videos,playVideo,setVidId,vidId,vidstats}=useContext(YtContext)
    // console.log(videos)

    const handleClickVideo=(videoId)=>{
        playVideo(videoId)
        setVidId(videoId)
    }
    const formatViews = (count) => {
        if (count >= 1000000) {
          return (count / 1000000).toFixed(1) + 'm';
        } else if (count >= 100000) {
          return (count / 1000).toFixed(0) + 'k';
        } else if (count >= 10000) {
          return (count / 1000).toFixed(1) + 'k';
        } else if (count >= 1000) {
          return (count / 1000).toFixed(0) + 'k';
        } else {
          return count;
        }
      };

      function timeAgo(dateString) {
        const currentDate = new Date();
        const previousDate = new Date(dateString);
      
        const timeDifference = currentDate - previousDate;
        const seconds = Math.floor(timeDifference / 1000);
      
        if (seconds < 60) {
          return seconds + 's ago';
        }
      
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) {
          return minutes + 'm ago';
        }
      
        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
          return hours + 'h ago';
        }
      
        const days = Math.floor(hours / 24);
        if (days < 7) {
          return days + 'd ago';
        }
      
        const weeks = Math.floor(days / 7);
        if (weeks < 4) {
          return weeks + 'w ago';
        }
      
        const months = Math.floor(days / 30);
        if (months < 12) {
          return months + 'mo ago';
        }
      
        const years = Math.floor(days / 365);
        return years + 'y ago';
      }
      


    useEffect(()=>{
        setVstats(vidstats)
    },[vidstats])

  return (
    <div className='home'>
        <div className='cards'>
            {videos.map((video,ind)=>
            (
                <div key={ind} className='card'>
                    <Link to={`/play/${video.id}`}>
                    <img onClick={()=>handleClickVideo(video.id)} src={video.snippet.thumbnails.high.url} alt=''></img></Link>
                    <div className='title'>
                        <p>{video.snippet.title}</p>
                    </div>
                    <div className='details'>
                        <div className='cname'>
                            <p>{formatViews(vidstats[ind]?.statistics.viewCount)}. views</p>
                        </div>
                        <div className='views'>
                            <p>{timeAgo(video.snippet.publishedAt)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Home
