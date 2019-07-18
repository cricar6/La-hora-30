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
            clearInterval(pass_story);
            project_container.innerHTML = "Desea continuar? Si No"
        }

        if (resting_projects[0] != undefined) {

            current_project = projects[resting_projects[0]];
            console.log(current_project);

            project_container.innerHTML = "";
            clearInterval(pass_story);
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

    const story_container = document.createElement('div');
    story_container.classList.add('story_container');

    const current_story_container = document.createElement('p');
    
    let current_story_index = JSON.parse(localStorage.getItem("media_selected"));
    let current_story = current_project.media[current_story_index];

    createStory(current_story_container, current_story);
    
    current_story_index += 1;

    const current_story_media_bars = document.createElement('div');
    current_story_media_bars.classList.add('project__container__bars-container');

    // The bar stuff --------------------------------------------------------
    
    current_project.media.forEach((element, index) => {

        const current_story_bar = document.createElement('div');
        current_story_bar.classList.add('project__container__bars-container__bar');
        current_story_bar.innerHTML = index+1;

        current_story_bar.classList.add('media-bar' + element.id);
        current_story_media_bars.appendChild(current_story_bar);
    });

    // The interval to pass --------------------------------------------------------

    pass_story = setInterval(() => {
        if (current_story_index >= current_project.media.length) {
            console.log("gi")

            current_story_index = 0;
        }

        current_story = current_project.media[current_story_index];
        current_story_index += 1;
        console.log("incremento", current_story_index);

        createStory(current_story_container, current_story);

        document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
            element.style.opacity = ".5";
        });
        document.querySelector('.media-bar' + current_story.id).style.opacity = "1";
    }, 3000);



    // The listener previous --------------------------------------------------------



    document.querySelector(".project__but-previous").addEventListener("click", () => {
        clearInterval(pass_story);

        current_story_index -= 1;
        console.log("decremento", current_story_index);

        if (current_story_index < 0) {
            current_story_index = current_project.media.length - 1;
        }

        current_story = current_project.media[current_story_index];
        createStory(current_story_container, current_story);

        document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
            element.style.opacity = ".5";
        });
        document.querySelector('.media-bar' + current_story.id).style.opacity = "1";

        // The interval --------------------------------------------------------

        pass_story = setInterval(() => {
            if (current_story_index >= current_project.media.length) {
                current_story_index = 0;
            }

            current_story = current_project.media[current_story_index];
            current_story_index += 1;
            console.log("incremento", current_story_index);

            createStory(current_story_container, current_story);

            document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
                element.style.opacity = ".5";
            });

            document.querySelector('.media-bar' + current_story.id).style.opacity = "1";
        }, 3000);

    });


    // The listener next --------------------------------------------------------


    document.querySelector(".project__but-next").addEventListener("click", () => {
        clearInterval(pass_story);

        current_story_index += 1;
        console.log("incremento", current_story_index);

        if (current_story_index >= current_project.media.length) {
            current_story_index = 0;
        }

        current_story = current_project.media[current_story_index];
        createStory(current_story_container, current_story);


        document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
            element.style.opacity = ".5";
        });

        document.querySelector('.media-bar' + current_story.id).style.opacity = "1";

        // The interval --------------------------------------------------------

        pass_story = setInterval(() => {
            if (current_story_index >= current_project.media.length) {
                current_story_index = 0;
            }

            current_story = current_project.media[current_story_index];
            current_story_index += 1;
            console.log("incremento", current_story_index);

            createStory(current_story_container, current_story);

            document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
                element.style.opacity = ".5";
            });

            document.querySelector('.media-bar' + current_story.id).style.opacity = "1";
        }, 3000);
    });


    // The DOM to HTML adders --------------------------------------------------------



    story_container.appendChild(current_story_container);
    project_container.appendChild(story_container);
    project_container.appendChild(current_story_media_bars);

    //project_html.appendChild(createProjectContentLayout(current_project));

    // after all elements were added from dom

    requestAnimationFrame(() => randomAnim());
    
    document.querySelectorAll('.project__container__bars-container__bar').forEach(element => {
        element.style.opacity = ".5";
    });
    document.querySelector('.media-bar' + current_story.id).style.opacity = "1";

    document.querySelector(".project__but-leader__name").innerHTML = current_project.leader.name;

    const leader_img = document.querySelector(".project__but-leader__leader__img");
    leader_img.style.backgroundImage = "url("+ current_project.leader.thumb +")";


}

/**
 * 
 * @param {HTML object} container 
 * @param {media object} content 
 */
function createStory (container, content) {
    container.innerHTML = content.source;
} 

function createProjectContentLayout(current_project) {

    const project_content_layout = document.createElement('div');
    project_content_layout.classList.add("project__content-layout");

    const swipe_up_link = document.createElement('a');

    const swipe_up = document.createElement('div');
    swipe_up.classList.add("project__content-layout__swipe-up");

    const swipe_up_bar = document.createElement('div');
    swipe_up_bar.classList.add("project__content-layout__swipe-up__bar");

    const swipe_up_copy = document.createElement('div');
    swipe_up_copy.innerHTML = "Swipe up";
    swipe_up_copy.classList.add("project__content-layout__swipe-up__copy");

    swipe_up.appendChild(swipe_up_copy);
    swipe_up.appendChild(swipe_up_bar);

    swipe_up_link.appendChild(swipe_up);
    project_content_layout.appendChild(swipe_up_link);

    const project_content_layout_container = document.createElement('div');
    project_content_layout_container.classList.add("project__content-layout__container");
    project_content_layout_container.setAttribute("id", "project_content_container");

    swipe_up_link.setAttribute("href", "#project_content_container");
    project_content_layout.appendChild(project_content_layout_container);

    return project_content_layout;
}

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

