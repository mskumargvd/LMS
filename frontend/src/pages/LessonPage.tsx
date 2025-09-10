import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import VideoPlayer from '../components/VideoPlayer';
const LessonPage: React.FC<{ videoId: string }> = ({ videoId }) => {
  const user = useSelector((state: any) => state.auth.user);
  const [accessToken, setAccessToken] = useState('');
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const response = await api.get(`/videos/${videoId}/access-token`);
        setAccessToken(response.data.token);
      } catch (err) {
        console.error('Failed to get video access token', err);
      }
    };
    fetchAccessToken();
  }, [videoId]);
  if (!accessToken) return <p>Loading secure video...</p>;
  return (
    <VideoPlayer videoId={videoId} accessToken={accessToken} userName={user.name} />
  );
};
export default LessonPage;