const btn_play = document.querySelector(".intro-screen__vid-plyr__container__btn-play");

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

