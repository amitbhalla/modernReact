import VideoItem from './VideoItem';

import './VideoList.css';

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return (
    <div className='videos-container'>
      <div className='single-video'></div>
      <ul className='video-list'>{renderedList}</ul>
    </div>
  );
};

export default VideoList;
