import React, { Component, useState, useEffect } from 'react';
import useVideos from '../hooks/useVideos';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () =>{
  
  const [selectedVideo, setSelectedVideo] = useState(null);  
  const [videos, search] = useVideos('Maracaibo');

  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos]);
  
  return (
    <div className='ui container' style={{marginTop: '10px'}}>
      <SearchBar onFormSubmit={search}/>
      <div className="grid ui">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList 
              videos={videos} 
              onVideoSelect={setSelectedVideo}
            />
          </div>
          
        </div>
      </div>
      
    </div>
  )

};

export default App;
