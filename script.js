document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const coverImage = document.getElementById('coverImage');
    const fileList = document.getElementById('fileList');

    // 音声ファイルと表示名のマッピング
    const audioFiles = [
        { file: 'audio/madeinabyss-oldstories.mp3', displayName: 'Made in Abyss - Old Stories' },
        { file: 'audio/madeinabyss-hanezevecaradhina.mp3', displayName: 'Made in Abyss - Hanezeve Caradhina' }
        // 他の音声ファイルをここに追加
    ];

    // 音声ファイルのリストを表示
    audioFiles.forEach(entry => {
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
        });
        fileList.appendChild(fileItem);
    });
});
