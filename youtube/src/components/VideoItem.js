const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <li
      className='videos-list__video'
      onClick={() => {
        onVideoSelect(video);
      }}>
      <div className='video__image-wrapper'>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className='image-wrapper__image'
        />
      </div>
      <div className='video__content-wrapper'>
        <p className='content-wrapper__title'>{`${video.snippet.title.substring(
          0,
          30
        )}...`}</p>
        <p className='content-wrapper__author'>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
