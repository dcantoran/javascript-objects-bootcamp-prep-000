var playlist = {ledZeppelin: "Whole Lotta Love"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}