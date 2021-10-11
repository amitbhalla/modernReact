import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  return <div>{song ? song.title : 'No selected song'}</div>;
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
