var db=require('../db-connection');

var Album={

getAllAlbums:function(callback){
return db.query("select al.album_name, ar.artist_name from album al inner join artist ar on al.artist_id = ar.artist_id", callback);
},
getAlbumById:function(id,callback){
return db.query("select album_id, album_name, artist_id from album where album_id=?", [id], callback);
 },
addAlbum:function(Album,callback){
return db.query("insert into album (album_id, album_name, artist_id) values(?,?,?)",[Album.Id, Album.Name, Album.ArtistId], callback);
 },
deleteAlbum:function(id,callback){
return db.query("delete from album where album_id=?",[id],callback);
 },
updateAlbum:function(id,Album,callback){
return db.query("update album set album_name=?,artist_id=? where album_id=?",[Album.Name, Album.ArtistId, id], callback);
 }

};
 module.exports=Album;
