function fetchPlaylist() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ playlist: "Uplifting Music", count: 26 }), 1000);
  });
}

async function loadPlaylist() {
  try {
    const result = await fetchPlaylist();
    console.log("Loaded playlist:", result);
  } catch (error) {
    console.error("Failed to load playlist", error);
  }
}

loadPlaylist();