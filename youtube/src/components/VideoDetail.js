const VideoDetail = ({ video }) => {
  if (!video) return 'Loading...';

  return (
    <div className='single-video__player'>
      <div className='player__iframe'>
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
        />
      </div>
      <div className='single-video__content'>
        <div className='content__title'>{video.snippet.title}</div>
        <p className='content__desc'>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
