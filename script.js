
       
        const difficultyButtons = document.querySelectorAll('.difficulty-buttons button');
        const fileButtons = document.querySelectorAll('.file-buttons button');
        const uploadMusicInput = document.getElementById('uploadMusicInput');
        const fileInput = document.getElementById('fileInput');
        const osuMap = document.querySelector('.osu-map');
        let isMp3Selected = false;

     
        difficultyButtons.forEach(button => {
            button.addEventListener('click', function() {
                difficultyButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

       
        fileButtons.forEach(button => {
            button.addEventListener('click', function() {
                fileButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                isMp3Selected = button.textContent.toLowerCase() === 'mp3';
            });
        });

       
        uploadMusicInput.addEventListener('click', function() {
            if (isMp3Selected) {
                fileInput.click();
            }
        });

        
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                osuMap.classList.add('reverse');  
            }
        });

       
        const downloadButton = document.querySelector('.download-button');
        const loadingOverlay = document.querySelector('.loading-overlay');
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-text');

        
        downloadButton.addEventListener('click', function() {
            loadingOverlay.classList.add('active');

            let progress = 0;
            const interval = setInterval(function() {
                progress += 1;
                progressBar.style.width = progress + '%';
                progressText.textContent = `Downloading... ${progress}%`;

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(function() {
                        loadingOverlay.classList.remove('active');
                        alert('Download complete!');
                    }, 500);
                }
            }, 50);
        });
  