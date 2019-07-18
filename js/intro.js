const btn_play = document.querySelector(".intro-screen__vid-plyr__container__btn-play");
btn_play.innerHTML = pause_res;

const intro_vid = videojs(document.querySelector('#intro-screen__vid-plyr__intro-vid'), {
    controls: false,
    preload: 'auto',
});

intro_vid.ready(function () {

    // progress bar functions
    const progressBar = document.querySelector('.intro-screen__vid-plyr__progress-bar');
    
    this.on('timeupdate', function () {
        let barLength = this.currentTime() / this.duration();
        progressBar.style.width = barLength * 100 + 'vw';
    });

    //intro_vid.requestFullscreen(); 
    let paused = false;
    let muted = false;

    loaded = true;

    window.addEventListener("mousemove", () => {
        btn_play.style.opacity = '1';

        setTimeout(() => {
            btn_play.style.opacity = '0';
        }, 2000);
    });

    document.querySelector('.intro-screen__vid-plyr__container__btn-play').addEventListener("click", () => {
        if (paused) {
            btn_play.innerHTML = pause_res;
            
            intro_vid.play();
            paused = !paused;

            console.log("Client: The video has been played");
        } else {
            btn_play.innerHTML = play_res;

            intro_vid.pause();
            paused = !paused;

            console.log("Client: The video has been paused");
        }

    });

    document.querySelector('.intro-screen__vid-plyr__low-bar__btn-mute').addEventListener("click", () => {
        if (muted) {
            intro_vid.muted(false);
            muted = !muted;

            document.querySelector(".intro-screen__vid-plyr__low-bar__btn-mute").style.textDecorationLine = "none";

            console.log("Client: The video has been muted");
        } else {
            intro_vid.muted(true);
            muted = !muted;

            document.querySelector(".intro-screen__vid-plyr__low-bar__btn-mute").style.textDecorationLine = "line-through";
            console.log("Client: The video has been unmuted");
        }
    });
});

