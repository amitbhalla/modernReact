import './VideoItem.css';

const VideoItem = ({ video }) => {
  return (
    <li className='video-item'>
      <div className='image-wrapper'>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
          className='video-image'
        />
      </div>
      <div className='content-wrapper'>
        <p className='video-title'>{`${video.snippet.title.substring(
          0,
          50
        )}...`}</p>
        <p className='video-author'>{video.snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
