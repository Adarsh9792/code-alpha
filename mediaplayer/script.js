let songs = [
    { title: "Song 1", src: "songs/song1.mp3" },
    { title: "Song 2", src: "songs/song2.mp3" },
    { title: "Song 3", src: "songs/song3.mp3" }
];

let currentSongIndex = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let isPlaying = false;

function loadSong(index) {
    title.textContent = songs[index].title;
    audio.src = songs[index].src;
}

function playPause() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    isPlaying = true;
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    isPlaying = true;
}

// Load the first song when the page opens
loadSong(currentSongIndex);
