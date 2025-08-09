const playlists = {
    happy: [
        "Happy – Pharrell Williams",
        "Can't Stop the Feeling – Justin Timberlake",
        "Walking on Sunshine – Katrina & The Waves"
    ],
    sad: [
        "Someone Like You – Adele",
        "Let Her Go – Passenger",
        "Fix You – Coldplay"
    ],
    relax: [
        "Weightless – Marconi Union",
        "Sunset Lover – Petit Biscuit",
        "Better Together – Jack Johnson"
    ],
    party: [
        "Uptown Funk – Bruno Mars",
        "Shake It Off – Taylor Swift",
        "Timber – Pitbull ft. Kesha"
    ]
};

function showPlaylist(mood) {
    const songList = document.getElementById("songList");
    songList.innerHTML = "";

    playlists[mood].forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        songList.appendChild(li);
    });
}
