import { PLAYLIST_NAME, CURATOR } from '../constants';

function hype(text) {
  return text.toUpperCase() + ' 🔥';
}

function Title() {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <h1 className="title">SPOTIFY</h1>
      <p className="description">
        Welcome to Janice's personal soundstation! Turn up the volume and enjoy a handpicked collection of top tracks curated just for you.
      </p>
      <p style={{ fontSize: '13px', margin: '8px 0' }}>🎧 {PLAYLIST_NAME} by {CURATOR}</p>
      <p style={{ fontSize: '12px', margin: '8px 0' }}><strong>{hype("now playing")}</strong></p>
    </div>
  );
}

export default Title;