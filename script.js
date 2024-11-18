var arr =[
    {songName:"Jale 2",url:"./songs/Jale 2 (Sapna Choudhary)(PagalWorld.com.cm).mp3",img:"./images/jale.jpg"},
    {songName:"Arjan Vailly", url:"./songs/Arjan Vailly Animal 128 Kbps.mp3",img:"./images/arjan.jpeg"},
    {songName:"Ve Kamleya",url:"./songs/Ve Kamleya(PagalWorld.com.cm).mp3",img:"./images/kamleyaa.jpeg"},
    {songName:"Holi 2.0",url:"./songs/Holi 2.0 - Dip SR(PagalWorld.com.cm).mp3",img:"./images/holi.jpeg"},
    // {songName:"Ram Siya Ram",url:"./new/_Ram Siya Ram(PagalWorld.com.cm).mp3",img:"./images/ram siya.jpeg"},
    // {songName:"Tu Hai Kahaan",url:"./new/Tu Hai Kahan(PagalWorld.com.cm).mp3",img:"./images/tu hai kahhan.jpeg"},
    // {songName:"Teri Baaton mein",url:"./new/Teri Baaton Mein Aisa Uljha Jiya(PagalWorld.com.cm).mp3",img:"./images/teri bato mein.jpeg"}
];

const allSongs=document.querySelector("#all-songs");
const poster = document.querySelector("#left")
const play = document.querySelector("#play");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
var audio =new Audio()
var selectedSong=0

function mainFunction(){
    var clutter =""
arr.forEach(function(elem,index){
    clutter += `     <div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img} alt="">
        <h2>${elem.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`
})

allSongs.innerHTML=clutter
audio.src =arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`
}
mainFunction()

allSongs.addEventListener("click",function(dets){
   selectedSong =dets.target.id
   mainFunction()
   play.innerHTML=`<i class="ri-pause-fill"></i>`
   flag =1
    audio.play()
})
var flag=0
play.addEventListener("click",function(){
    if(flag === 0){
        play.innerHTML=`<i class="ri-pause-fill"></i>`
        mainFunction()
        audio.play()
        flag=1
    }
    else{
        play.innerHTML=`<i class="ri-play-fill"></i>`
        mainFunction()
        audio.pause()
        flag=0
    }
})


forward.addEventListener("click",function(){
       if(selectedSong  < arr.length-1){
        selectedSong++;
        mainFunction()
        audio.play()
       }
       else{
        forward.style.opacity=0.4;
       }
})


backward.addEventListener("click",function(){
    if(selectedSong  > 0){
     selectedSong--;
     mainFunction()
     audio.play()
    }
    else{
     backward.style.opacity=0.4;
    }
})




