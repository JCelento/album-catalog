const express = require('express');
const router = express.Router();
var Album = require('../../models/Album');
var Artist = require('../../models/Artist');
var Track = require('../../models/Track');

router.get('/', (req, res) => {
  res.send('api index');
});

router.get('/albums/:id?',function(req,res,next){

if(req.params.id){
  Album.getAlbumById(req.params.id,function(error,results){
    if(error) res.send(error);
      res.status(200).json(results);
});
}
else{
Album.getAllAlbums(function(error,results){
  if(error) res.send(error);
  res.status(200).json(results);
});
 }
 });

router.post('/albums',function(req,res,next){

Album.addAlbum(req.body,function(error,count){
  if(error) res.send(error);
  res.status(201).json(req.body);
  });
 });

 router.delete('/albums/:id',function(req,res,next){

Album.deleteAlbum(req.params.id,function(error,count){
   if(error) res.send(error);
   res.status(200).json({"response": "Sucessfully deleted"});
   });
  });;

router.put('/albums/:id',function(req,res,next){

Album.updateAlbum(req.params.id,req.body,function(error,result){
        if(error) res.send(error);
        res.status(200).json(req.body);
        });
       });;

       router.get('/artists/:id?',function(req,res,next){

       if(req.params.id){
         Artist.getArtistById(req.params.id,function(error,results){
           if(error) res.send(error);
             res.status(200).json(results);
       });
       }
       else{
       Artist.getAllArtists(function(error,results){
         if(error) res.send(error);
         res.status(200).json(results);
       });
        }
        });

       router.post('/artists',function(req,res,next){

       Artist.addArtist(req.body,function(error,count){
         if(error) res.send(error);
         res.status(201).json(req.body);
         });
        });

        router.delete('/artists/:id',function(req,res,next){

       Artist.deleteArtist(req.params.id,function(error,count){
          if(error) res.send(error);
          res.status(200).json({"response": "Sucessfully deleted"});
          });
         });;

       router.put('/artists/:id',function(req,res,next){

       Artist.updateArtist(req.params.id,req.body,function(error,result){
               if(error) res.send(error);
               res.status(200).json(req.body);
               });
              });;

              router.get('/tracks/:id?',function(req,res,next){

              if(req.params.id){
                Track.getTrackById(req.params.id,function(error,results){
                  if(error) res.send(error);
                    res.status(200).json(results);
              });
              }
              else{
              Track.getAllTracks(function(error,results){
                if(error) res.send(error);
                res.status(200).json(results);
              });
               }
               });

              router.post('/tracks',function(req,res,next){

              Track.addTrack(req.body,function(error,count){
                if(error) res.send(error);
                res.status(201).json(req.body);
                });
               });

               router.delete('/tracks/:id',function(req,res,next){

              Track.deleteTrack(req.params.id,function(error,count){
                 if(error) res.send(error);
                 res.status(200).json({"response": "Sucessfully deleted"});
                 });
                });;

              router.put('/tracks/:id',function(req,res,next){

              Track.updateTrack(req.params.id,req.body,function(error,result){
                      if(error) res.send(error);
                      res.status(200).json(req.body);
                      });
                     });;


module.exports = router;
