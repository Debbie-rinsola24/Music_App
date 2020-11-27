let fillbar = document.querySelector(".fill");
let audios = ["06-i-wish.mp3", "09 Majesty.mp3", "Accient World.mp3"];
let covers = ["music.jpg", "music1.jpg", "music.jpg"];
let currentTime = document.querySelector(".time");

// Create An Object Of Audio

let audio = new Audio();
let currentSong = 0;

// whenever the window load, song should play automaticly

window.onload = playSong;

// let's play the song by this function whenever window load

function playSong() {
  audio.src = audios[currentSong];
  audio.play();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-pause"></i>';
    playBtn.style.paddingLeft = "30px";
  } else {
    audio.pause();
    playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = '<i class="fa fa-play"></i>';
    playBtn.style.paddingLeft = "33px";
  }
}

// Now let's make dynamic the fillbar

audio.addEventListener("timeupdate", function() {
  let position = audio.currentTime / audio.duration;
  fillbar.style.width = position * 100 + "%";
});
