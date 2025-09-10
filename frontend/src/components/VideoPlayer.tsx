import React from 'react';
interface VideoPlayerProps {
  videoId: string;
  accessToken: string;
  userName: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, accessToken, userName }) => {
  const srcUrl = `https://drive.google.com/file/d/${videoId}/preview?access_token=${accessToken}`;
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <iframe
        title="Secure Video Player"
        src={srcUrl}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-presentation"
      />
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          bottom: 10,
          right: 10,
          opacity: 0.3,
          color: '#fff',
          fontSize: 14,
          userSelect: 'none',
          textShadow: '1px 1px 2px black',
        }}
      >
        {userName}
      </div>
    </div>
  );
};
export default VideoPlayer;