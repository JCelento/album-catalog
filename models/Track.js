var db=require('../db-connection');

var Track={

getAllTracks:function(callback){
return db.query("select t.track_name, t.time, ar.artist_name, al.album_name from track t inner join artist ar on t.artist_id = ar.artist_id inner join album al on al.album_id = t.album_id", callback);
},
getTrackById:function(id,callback){
return db.query("select track_id, track_name, artist_id, time, album_id from track where track_id=?", [id], callback);
 },
addTrack:function(Track,callback){
return db.query("insert into track (track_id, track_name, artist_id, time, album_id) values(?,?,?,?,?)",[Track.Id, Track.Name ,Track.ArtistId, Track.Time, Track.AlbumId], callback);
 },
deleteTrack:function(id,callback){
return db.query("delete from track where track_id=?", [id], callback);
 },
updateTrack:function(id,Track,callback){
return db.query("update track set track_name=?, artist_id=?, time=?, album_id=? where track-id=?", [Track.Name, Track.ArtistId, Track.Time, Track.AlbumId, id], callback);
 }

};
 module.exports=Track;
