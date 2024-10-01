import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import './Spa.css'; // Add custom CSS for styling

const Spa = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: 'Project 1 - Portal Mangement System', src: '/videos/pr1.mp4' },
    { id: 2, title: 'Project 2 - Hr.my', src: '/videos/hr.my.mp4' },
    { id: 3, title: 'Project 3 - E-Commerce admin Panel', src: '/videos/ecadm.mp4' },
    { id: 4, title: 'Project 4 -E-Commerce Website', src: '/videos/ec.mp4' },
  ];

  return (
    <div>
      <Navbar />
      <h2 className="title">Full Stack <span className="color">Development Projects</span></h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <video
              src={video.src}
              onClick={() => setSelectedVideo(video.src)}
              controls
              width="300"
              height="200"
              className="video"
            />
          </div>
        ))}
      </div>

      {/* Modal Popup for Video */}
      {selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedVideo(null)}>&times;</span>
            <video src={selectedVideo} controls autoPlay className="modal-video" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Spa;
