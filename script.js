document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const coverImage = document.getElementById('coverImage');
    const fileList = document.getElementById('fileList');
    const searchInput = document.getElementById('searchInput');
    const currentTrack = document.getElementById('currentTrack');

    const audioFiles = [
        { file: 'audio/madeinabyss-oldstories.mp3', displayName: 'Made in Abyss - Old Stories' },
        { file: 'audio/madeinabyss-hanezevecaradhina.mp3', displayName: 'Made in Abyss - Hanezeve Caradhina' },
        { file: 'audio/genshin-arlecchinobgm.mp3', displayName: 'Genshin - Arlecchino Theme' },
        { file: 'audio/genshin-partingoflightandshadow.mp3', displayName: 'Genshin - Parting of light and Shadow 光と影の決別' },
        { file: 'audio/genshin-raidenbgm.mp3', displayName: 'Genshin - Raiden Theme' }
    ];

    function displayFiles(files) {
        fileList.innerHTML = '';
        files.forEach(entry => {
            const fileName = entry.file.split('/').pop();
            const baseName = fileName.replace('.mp3', '');
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';
            fileItem.textContent = entry.displayName;
            fileItem.addEventListener('click', function() {
                audioPlayer.src = entry.file;
                const coverSrc = `audio/${baseName}.png`;
                coverImage.src = coverSrc;
                coverImage.style.display = 'block';
                audioPlayer.play();
                currentTrack.textContent = '再生中の曲: ' + entry.displayName;
            });
            fileList.appendChild(fileItem);
        });
    }

    const sortedAudioFiles = audioFiles.sort((a, b) => a.displayName.localeCompare(b.displayName));
    displayFiles(sortedAudioFiles);

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredFiles = sortedAudioFiles.filter(entry => 
            entry.displayName.toLowerCase().includes(query)
        );
        displayFiles(filteredFiles);
    });
});
