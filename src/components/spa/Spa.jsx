import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';

const Spa = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { 
      id: 1, 
      title: 'Portal Management System', 
      description: 'A comprehensive portal management system with user authentication and dashboard',
      src: '/videos/pr1.mp4',
      poster: '/assests/images/pms.png',
      tech: 'React, Node.js, MongoDB'
    },
    { 
      id: 2, 
      title: 'HR Management System', 
      description: 'Human resources management platform with employee tracking and reporting',
      src: '/videos/hr.my.mp4',
      poster: '/assests/images/hr.png',
      tech: 'Angular, Express.js, MySQL'
    },
    { 
      id: 3, 
      title: 'E-Commerce Admin Panel', 
      description: 'Advanced admin panel for e-commerce platform with analytics and inventory management',
      src: '/videos/ecadm.mp4',
      poster: '/assests/images/ecommerce.png',
      tech: 'React, Node.js, PostgreSQL'
    },
    { 
      id: 4, 
      title: 'E-Commerce Website', 
      description: 'Full-featured e-commerce website with payment integration and user management',
      src: '/videos/ec.mp4',
      poster: '/assests/images/e-commerce.png',
      tech: 'MERN Stack, Stripe API'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-secondary to-dark">
      <Navbar />
      
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="md:container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Full Stack <span className="gradient-text">Development Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore my full-stack development projects showcasing modern web technologies, 
              responsive design, and robust backend solutions.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Video Container */}
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    poster={video.poster}
                    preload="metadata"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-300 transform hover:scale-110"
                    >
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {video.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {video.tech.split(', ').map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: '800ms' }}>
            <p className="text-xl text-gray-300 mb-6">
              Interested in similar projects?
            </p>
            <a 
              href="/contact" 
              className="btn-primary text-lg px-8 py-4 inline-flex items-center"
            >
              Let's Build Something Together
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Modal for Video Playback */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[80vh] bg-dark rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player */}
            <video
              src={selectedVideo.src}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
            
            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {videos.find(v => v.src === selectedVideo.src)?.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {videos.find(v => v.src === selectedVideo.src)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Spa;
