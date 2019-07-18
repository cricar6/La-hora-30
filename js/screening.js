// This will start dashboard screen
document.querySelector(".intro-screen__vid-plyr__low-bar__btn-skip").addEventListener("click", () => {
    document.querySelector(".intro-screen").style.display = "none";
    document.querySelector(".dashboard").style.display = "block";
    
    // Video restarted
    intro_vid.pause();
    intro_vid.currentTime(0);

    console.log("Client: The video has been restarted and stoped");

    isDash = true;

    // This listener will add all elements to screen in the first place
    // and after it will kill itself
    dash_listener = setInterval(() => {
        if (isDash) {
            let max_elems = 8;
            let current_elem= 0;
            elements_out.forEach(element => {
                if (current_elem < max_elems) {
                    current_elem++;
                    let app = document.querySelector(".dashboard");
                    createElement(app, element, true);
                    translateElement(element.id, true);
                }
            });
            console.log("Client: Started, dash_listener clean")
            clearInterval(dash_listener);
        }

    }, 100)

});


// This button will return to intro_vid screen
document.querySelector(".dashboard__but-back").addEventListener("click", () => {
    document.querySelector(".dashboard").style.display = "none";

    document.querySelector(".intro-screen").style.display = "block";
    intro_vid.play();

    isDash = false;

    document.querySelectorAll(".element").forEach(element => {
        element.remove();
    });

    clearInterval(dash_listener);
    clearInterval(restore_snaps);
});


// In case the user returns from project to dashboard this button will start dashboard again
document.querySelector(".project__but-back").addEventListener("click", () => {
    document.querySelector(".dashboard").style.display = "block";
    project_container.style.display = "none";
    isDash = true;

    dash_listener = setInterval(() => {

        if (isDash) {
            let max_elems = 4;
            let current_elem= 0;
            elements_out.forEach(element => {
                if (current_elem < max_elems) {
                    current_elem++;
                    let app = document.querySelector(".dashboard");
                    createElement(app, element, true);
                    translateElement(element.id, true);
                }
            });
            console.log("Client: Started, dash_listener clean")
            clearInterval(dash_listener);
        }

    }, 800)

    restore_snaps = setInterval(() => {
        if (isDash) {
            if (elements_out.length > 0) {
                rndm_element = elements_out[Math.floor(Math.random() * elements_out.length)];

                let app = document.querySelector(".dashboard");

                createElement(app, rndm_element, false);
                translateElement(rndm_element.id, true);

                console.log("Client: An element has been created: " + rndm_element.id, "Resting elements Out: ", elements_out);
            }
        }
    }, 3000);
});