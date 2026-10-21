import SongOne from './SongOne';
import SongTwo from './SongTwo';
import SongThree from './SongThree';
import './SongList.css';

function SongList() {
  return (
    <section>
      <div className="song-card"><SongOne /></div>
      <div className="song-card"><SongTwo /></div>
      <div className="song-card"><SongThree /></div>
    </section>
  );
}

export default SongList;