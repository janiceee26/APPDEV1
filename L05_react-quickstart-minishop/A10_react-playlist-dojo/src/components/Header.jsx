import Title from './Title';
import Divider from './Divider';

function Header() {
  const isLive = true;
  return (
    <header style={{ width: '100%' }}>
      <Divider />
      <Title />
      <p style={{ fontSize: '13px', margin: '5px 0' }}>
        {isLive ? "Listening live now." : "Offline."}
      </p>
    </header>
  );
}

export default Header;