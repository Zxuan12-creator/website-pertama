const music = document.getElementById('background-music');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');

playButton.addEventListener('click', () => music.play());
stopButton.addEventListener('click', () => music.pause());

