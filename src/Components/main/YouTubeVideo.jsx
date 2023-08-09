import React from 'react';

const YouTubeVideo = () => {
  const videoUrl = `https://www.youtube.com/watch?v=8p3ATe7jVSM?autoplay=1&mute=1&loop=1`;

  return (
    <div className="w-full h-0 relative" style={{ paddingBottom: '56.25%' }}>
     <iframe className="absolute top-0 left-0 w-full h-full"  frameBorder="0"  src="https://www.youtube.com/embed/8p3ATe7jVSM?&autoplay=1&loop=1&mute=1" title="YouTube video player"  allow="autoplay; loop; encrypted-media ; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  );
};

export default YouTubeVideo;