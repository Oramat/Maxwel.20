let mysound = document.getElementById("maxwelmusic");
let icon = document.getElementById("icon");

// A function that will pause and play the music
icon.onclick = function() {
    if (maxwelmusic.paused) {

        // A function that will play the music
        maxwelmusic.play();
        icon.src =
"https://pngtree.com/freepng/yellow-play-button_854581.html//";
    } else {

        // A function that will pause the music
        maxwelmusic.pause();
        icon.src =
"https://pngtree.com/freepng/yellow-play-button_854581.html//";
    }
}