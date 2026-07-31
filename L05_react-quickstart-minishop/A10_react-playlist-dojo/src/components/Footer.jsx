function Footer() {
  return (
    <footer style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '11px', color: '#888888', margin: 0 }}>
        © {new Date().getFullYear()} Spotify. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;