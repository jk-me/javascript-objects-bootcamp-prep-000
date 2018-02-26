var playlist = {}

function updatePlaylist(obj,a,s){
  obj.a=s
  return obj
}

function removeFromPlaylist(obj,a){
  delete obj.a
  return obj
}