var db=require('../db-connection');

var Artist={

getAllArtists:function(callback){
return db.query("select a.artist_name, a.artist_id, al.album_name from artist a inner join album al on a.artist_id = al.artist_id", callback);
},
getArtistById:function(id,callback){
return db.query("select artist_id, artist_name from artist where artist_id=?", [id], callback);
 },
addArtist:function(Artist,callback){
return db.query("insert into artist (artist_id, artist_name) values(?,?,?,?,?)",[Artist.Id, Artist.Name], callback);
 },
deleteArtist:function(id,callback){
return db.query("delete from artist where artist_id=?", [id], callback);
 },
updateArtist:function(id,Artist,callback){
return db.query("update artist set artist_name=? where artist-id=?",[Artist.Name, id], callback);
 }

};
 module.exports=Artist;
