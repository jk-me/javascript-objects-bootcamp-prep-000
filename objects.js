var playlist = {}

function updatePlaylist(playlist,a,s){
  playlist[a]=s
  return playlist
}

function removeFromPlaylist(obj,a){
  delete obj[a]
  return obj
}