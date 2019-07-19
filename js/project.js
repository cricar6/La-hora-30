const project_container = document.querySelector(".project__container");
const project_html = document.querySelector(".project");

/**
 * This method will be started when screen starts
 * a project is created, and random button is defined
 * createProject () will be defined after
 *  
 * Random is out createProject because it is external 
 * to project
 *  
* */
function startProject() {

    console.log("Client: Project Screen started");

    createProject();

    // The vars for random button --------------------------------------------------------
    let resting_projects = [0, 1, 2, 3];

    index_proj = projects.findIndex((element) => {
        return element == current_project;
    });

    resting_projects[index_proj] = undefined;

    // The random button --------------------------------------------------------
    document.querySelector(".project__but-random").addEventListener("click", () => {
        localStorage.setItem('media_selected', JSON.stringify(1));

        if (!resting_projects.every((element) => {
            return element == undefined
        })) {
            while (resting_projects[0] == undefined) {
                console.log("still running", resting_projects);
                shuffle(resting_projects);
            }
        } else {
            //añadir pop-up

            const pop_up = document.createElement("div");
            pop_up.classList.add("pop-up");
                        
            const background = document.createElement("div");
            background.classList.add("pop-up__background");
                        
            const pop_up_container = document.createElement("div");
            pop_up_container.classList.add("pop-up__container");
            
            const pop_up_description = document.createElement("p");
            pop_up_description.innerHTML = "Las historias acabaron, ¿quieres continuar viéndolas?";
            pop_up_description.classList.add("pop-up__container__description");
            
            const pop_up_but_container = document.createElement("div");
            pop_up_but_container.classList.add("pop-up__container__but-container");
            
            const pop_up_no = document.createElement ("button");
            pop_up_no.innerHTML = "No";
            pop_up_no.classList.add("pop-up__container__but-container__no");

            const pop_up_yes = document.createElement ("button");
            pop_up_yes.innerHTML = "Yes";
            pop_up_yes.classList.add("pop-up__container__but-container__yes");
            
            pop_up_but_container.appendChild(pop_up_no);
            pop_up_but_container.appendChild(pop_up_yes);

            pop_up_container.appendChild(pop_up_description);
            pop_up_container.appendChild(pop_up_but_container);

            background.appendChild(pop_up_but_container);
            pop_up.appendChild(background);
            
            project_container.appendChild(pop_up);
        }

        if (resting_projects[0] != undefined) {

            current_project = projects[resting_projects[0]];
            console.log(current_project);
            document.querySelector(".project__container__bars-container").remove();

            createProject();
            resting_projects[0] = undefined;
        }
    })
}

/**
 * Create project will be called every time a project is selected
 * from random button or from dashboard screen
 * 
 * Story interactions are defined here, as next and previous buttons
 * 
 * The variable current_project.media defines all the media for project
 * The variable current_project.leader defines all the data for project leader
 * The variable current_story, defines the story showing
 * The variable current_story_index, defines the current_project.media 
 * element position to show
 * 
 */
function createProject() {
    //The element leader is temporary
    let current_story_index = JSON.parse(localStorage.getItem("media_selected"));
    
    let current_story = current_project.media[current_story_index];
    
    const current_story_media_bars = document.createElement('div');
    current_story_media_bars.classList.add('project__container__bars-container');
    
    // The bar stuff --------------------------------------------------------
    current_project.media.forEach((element, index) => {
        const current_story_bar = document.createElement('div');
        current_story_bar.classList.add('project__container__bars-container__bar');
        current_story_bar.innerHTML = index + 1;
        
        current_story_bar.classList.add('media-bar' + element.id);
        current_story_media_bars.appendChild(current_story_bar);
    });
    
    project_container.appendChild(current_story_media_bars);
    
    document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
        element.style.opacity = ".5";
    });
    

    
    changeVideo(current_story, current_story_index, true);
    


    document.querySelector(".project__but-next").addEventListener('mouseover', () => {
        console.log("nex")
        document.querySelector(".project__but-next button").style.transform = 'scale (1.2)';
    });

    document.querySelector(".project__but-previous").addEventListener('mouseover', () => {
        console.log("prev")
        document.querySelector(".project__but-previous button").style.transform = 'scale (1.2)';
    });


    // The listener previous --------------------------------------------------------
    document.querySelector(".project__but-previous").addEventListener("click", () => {
        
        let current_index = JSON.parse(localStorage.getItem("media_selected"));
        
        current_index--;
        if (current_index < 0) {
            current_index = current_project.media.length - 1;
        }
 
        localStorage.setItem("media_selected", current_index);

        let current_story = current_project.media[current_index];
        
        document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
            element.style.opacity = ".5";
        });
        changeVideo(current_story, current_index, false);
    });

    // The listener next --------------------------------------------------------
    document.querySelector(".project__but-next").addEventListener("click", () => {
        let current_index = JSON.parse(localStorage.getItem("media_selected"));
        
        current_index++;

        if (current_index >= current_project.media.length) {
            current_index = 0;
        }

        localStorage.setItem("media_selected", current_index);

        let current_story = current_project.media[current_index];
        
        document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
            element.style.opacity = ".5";
        });
        changeVideo(current_story, current_index, true);
    });


    // The DOM to HTML adders ------------

    //project_html.appendChild(createProjectContentLayout(current_project));

    // after all elements were added from dom

    requestAnimationFrame(() => randomAnim());

    document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
        element.style.opacity = ".5";
    });
    document.querySelector('.media-bar' + current_story.id).style.opacity = "1";

    document.querySelector(".project__but-leader__name").innerHTML = current_project.leader.name;

    const leader_img = document.querySelector(".project__but-leader__leader__img");
    leader_img.style.backgroundImage = "url(" + current_project.leader.thumb + ")";



    
}

function changeVideo (content, current_index, pass) {
    videojs(document.querySelector('#story_container__video')).ready(function () {
    
        let player = this;
        let executed = false;

        player.pause();
        player.src({type: 'video/youtube', src: content.source});

        player.load();

        player.play();
        
        document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
            element.style.opacity = ".5";
        });

        document.querySelector('.media-bar' + content.id).style.opacity = "1";
    
        console.log("This is entrying", current_index);
        player.on('ended', function () {
            if (!executed) {
                
                if (pass) {
                    
    
                    current_index++;
    
                    //insert code of finished here
                    if (current_index >= current_project.media.length) {
                    
                        current_index = 0;
                    }
                } else {
                    current_index--;

                    if (current_index < 0) {
                        current_index = current_project.media.length - 1;
                    }
                }
    
                console.log("will asign this", current_index);
    
                localStorage.setItem("media_selected", current_index);

                let current_story = current_project.media[current_index];
                                 

                changeVideo(current_story, current_index, true)
                //executed = true
            }
        });
    });
}

/**
 * @param {HTML object} container 
 * @param {media object} content 
 */

const random_anim_duration = 500;
const random_anim_wait = 3000;

function randomAnim() {
    document.querySelector(".project__but-random__dummie").style.transform = "scale(1.15)";
    setTimeout(() => {
        document.querySelector(".project__but-random__dummie").style.transform = "scale(1)";
    }, random_anim_duration);

    setTimeout(() => {
        requestAnimationFrame(() => randomAnim());
    }, random_anim_wait);
}


const swipe_up_anim_duration = 500;
const swipe_up_anim_wait = 3000;

function move() {

    document.querySelector(".project__content-layout__swipe-up").style.transform = "translate3d(0px,-25px,0px)";

    setTimeout(() => {
        document.querySelector(".project__content-layout__swipe-up").style.transform = "translate3d(0px,0px,0px)";
    }, swipe_up_anim_duration);

    setTimeout(() => {
        requestAnimationFrame(() => move());
    }, swipe_up_anim_wait);
}

/**
 * Shuffle will receive and array and mix it
 * @param {array} a 
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

