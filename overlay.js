const nowPlayingText = document.getElementById('now-playing-text');
const snipFilePath = 'path/to/your/Snip.txt'; // Replace with the path to your Snip.txt file

function updateNowPlaying() {
    fetch(snipFilePath)
        .then((response) => response.text())
        .then((text) => {
            if (nowPlayingText.textContent !== text) {
                nowPlayingText.style.animation = 'none';
                setTimeout(() => {
                    nowPlayingText.style.animation = '';
                }, 10);
            }
            nowPlayingText.textContent = text || 'No music playing';
        })
        .catch((error) => {
            console.error('Error fetching Snip.txt:', error);
            nowPlayingText.textContent = 'Error loading song info';
        });
}

updateNowPlaying();
setInterval(updateNowPlaying, 5000); // Update every 5 seconds

