import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SongList from './components/tracks/SongList';

function App() {
  return (
    <div className="page">
      <Header />
      <SongList />
      <Footer />
    </div>
  );
}

export default App;