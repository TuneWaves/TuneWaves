function Music(songer,nameSong,img, music){
   var  song={}
   song.songer=songer
   song.nameSong=nameSong
   song.img=img
   song.music = music
   return song
}

function MakeMusic(){
   var musicList={}
   musicList.addMusic=add
   musicList.serachMusic=search
   musicList.myMusic=[]
   return musicList
}

var add = function(music){
   this.myMusic.push(music)
 }

 function each(coll, f) { 
    if (Array.isArray(coll)) { 
          for (var i = 0; i < coll.length; i++) { 
                f(coll[i], i); 
          } 
    } else { 
       for (var key in coll) { 
                f(coll[key], key); 
               } 
            } 
         }
         function filter(array, predicate) {
            var acc = [];
            each(array, function(element) {
               if (predicate(element)) {
                  acc.push(element);
               }
            });
            return acc;
         }

         
         function inject(array) { 
            each(array, function (e) {
               
               $('.music-played').append(`
               <div class="music"  onclick="play()">
               <img class="music-img" src="${e.img}" alt="">
               <div class="music-desc">
               <p id="title">${e.nameSong}</p>
               <p id="artist">${e.songer}</p>
               </div>
               <div class="music-data">
               <p id="">3:40</p>
               <i class="bi bi-heart"></i>
               </div>
               <audio class="player" id="${e.nameSong.replace(/\s/g, '-')}">
               <source src="${e.music}" type="audio/mpeg">
               </audio>
               </div>`
               )
               console.log(e)
               $('.music').click(function(){
                  var audioId = $(this).find('.player').attr('id');
                  var audio = document.getElementById(audioId);
                      audio.play();
                  // Set up the timeline slider after audio metadata is loaded
                  audio.addEventListener('loadedmetadata', function() {
                      $('.timeline-slider').attr('max', audio.duration).val(0);
                  });
              
                  // Update the timeline slider as the audio plays
                  audio.addEventListener('timeupdate', function() {
                      $('.timeline-slider').val(audio.currentTime);
                  });
                  
                  localStorage.setItem("music", JSON.stringify(audioId));
              });

               $('.play').click(function(){
                  var audioId = JSON.parse(localStorage.getItem("music"));
                  var audio = document.getElementById(audioId);
                  
                  if (audio) {
                      audio.play();
                  }
              });


              $('.volume-slider').on('input', function() {
               var audioId = JSON.parse(localStorage.getItem("music"));
               var audio = document.getElementById(audioId);
               
               if (audio) {
                   audio.volume = $(this).val();
               }
           });


            $('.timeline-slider').on('input', function() {
               var audioId = JSON.parse(localStorage.getItem("music"));
               var audio = document.getElementById(audioId);
               
               if (audio) {
                  audio.currentTime = $(this).val();
               }
         });


              $('.pause').click(function(){
               var audioId = JSON.parse(localStorage.getItem("music"));
               var audio = document.getElementById(audioId);
               
               if (audio) {
                   audio.pause();
               }
           });

              $('.stop').click(function(){
               var audioId = JSON.parse(localStorage.getItem("music"));
               var audio = document.getElementById(audioId);
               
               if (audio) {
                   audio.load();
               }
           });
            })
         } 
         JSON.parse(localStorage.getItem('music'))





var search = function(){
   var searched = $('input').val();
    console.log(searched)
    var arr = filter(store.myMusic, function(e) { 
       return e.songer.toLowerCase() === searched.toLowerCase() || e.nameSong.toLowerCase() === searched.toLowerCase(); 
    });
    inject(arr)
   }


   
 var myMusic1=Music("The Weeknd","Save Your Tears","./images_page1/images/the weekendd.jpg","./music/Save Your Tears.mp3")
 var myMusic2=Music("AYE 070 Shake","Escapism","./images_page1/images/escapism.jpg","./music/Escapism.mp3")
 var myMusic3=Music("Calvin Harris, Dua Lipa" ," One Kiss","./images_page1/images/on kiss.jpg","./music/One Kiss.mp3")
 var myMusic4=Music("2Pac " ,"All Eyez On Me","./images_page1/images/2pac.jpg","./music/All Eyez On Me.mp3")
 var myMusic5=Music("GIMS" , "Le prix Ã  payer","./images_page1/images/gims.jpg","./music/Le prix à payer.mp3")
 var myMusic6=Music("Jennifer Lopez" ," Ain't Your Mama","./images_page1/images/jennifer.jpg","./music/Aint Your Mama.mp3")
 var myMusic7=Music("Michael Jackson" ,"They Don t Care..","./images_page1/images/michael.webp","./music/They Dont Care About Us.mp3")
 var myMusic8=Music("Eminem" ,"Never Love Again","./images_page1/images/eminem.jpg","./music/Never Love Again.mp3")
 var myMusic8=Music("Eminem" ,"Never Love Again","./images_page1/images/eminem.jpg","./music/Starboy.mp3")
 
 var store=MakeMusic()
 store.addMusic(myMusic1)
 store.addMusic(myMusic2)
 store.addMusic(myMusic3)
 store.addMusic(myMusic4)
 store.addMusic(myMusic5)
 store.addMusic(myMusic6)
 store.addMusic(myMusic7)
 store.addMusic(myMusic8)
 
 /*  $(".bi-search").on("onclick",function(){
    $(document).ready(function () {
       $('.music-played').empty()
       each(array, function (e) {
          
          $('.music-played').append(`
`
)
      $('.music').click(function(){
         localStorage.setItem("music", JSON.stringify(e))
      })
   })
})
}) */


 $('.bi-search').click(function(){
      $('.music-played').empty()
      store.serachMusic()
})
inject(store.myMusic)

$(document).ready(function() {
   $("#fedi").click(function() {
       // Empty the .music-played element
       $("#containe").empty();

       // Display all the music items in cards
       $('.fav-music').append(`
       <div  onclick="play()">
       <img  src="${e.img}" alt="">
       <div class="music-desc">
       <p id="title">${e.nameSong}</p>
       <p id="artist">${e.songer}</p>
       </div>
       <div class="music-data">
       <p id="">3:40</p>
       <i class="bi bi-heart"></i>
       </div>
       <audio class="player" id="${e.nameSong.replace(/\s/g, '-')}">
       <source src="${e.music}" type="audio/mpeg">
       </audio>
       </div>`
       )
 // Hide the container
   });

   // Rest of your code...
});

    //sign_up
    $("#up").on("click", function(){
      $("#containe").hide()
      console.log("sirine")
    });


    //log_in
    $("#on").on("click", function(){
      $("#containe").css('display', 'none')
      console.log("sirine")
   
    });


    


    





