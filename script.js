const musicdB =[{

songName : 'ab',
fileLoc : "resources\Mar Jaayen.mp3"
},
{
    songName : 'Tujhse naraj',
    fileLoc :''
}
];

/*const findMusicinDB = function(myMusics,sName){
    const music = myMusics.find(function(song){
        return song.songName == sName;
    })
    return music;
}*/

const audio = document.querySelector('audio');
const buttonRef = document.querySelectorAll('.playButton'); //It will return a nodeList.
buttonRef.forEach((button) => { //from the nodeList we are iterating through every element by forEach method.
     
    
    button.addEventListener("click",()=>{ //whenever any button clicked addEventhandler method will give the button Name.
        console.log("you clicked "+button.id+" button");
        //let clickedSong = findMusicinDB(musicdB,button.id);
        //console.log(clickedSong.fileLoc);
        audio.play();
        
        })
})

//we need to find the songname from the db