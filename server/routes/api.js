const express = require('express');
const router = express.Router();
var Album = require('../../models/Album');

router.get('/', (req, res) => {
  res.send('api index');
});

router.get('/albums/:id?',function(req,res,next){

if(req.params.id){
  Album.getAlbumById(req.params.id,function(error,results){
    if(error) throw error;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
}
else{
Album.getAllAlbums(function(error,results){
  if(error) throw error;
  res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});
 }
 });

module.exports = router;
