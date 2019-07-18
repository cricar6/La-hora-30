//var declaration

let isDash = false;
let dash_listener = null;

/**
 * id is the element to pass
 * 
 * type is true for create element, or pass it to elements_in array 
 * false to delete it, or pass it to elements_out array
 * 
 * @param {string} id 
 * @param {boolean} type 
 */
function translateElement(id, type) {

    let outing_array, entrying_array;

    if (type) {
        outing_array = elements_in;
        entrying_array = elements_out;
    } else {
        outing_array = elements_out;
        entrying_array = elements_in;
    }

    outing_array.push(
        entrying_array.find((e) => {
            if (e != null) {
                return e.id == id
            } else {
                return null;
            }
        })
    );

    let index = entrying_array.findIndex((e) => {
        if (e != null) {
            return e.id == id
        } else {
            return null;
        }
    });

    // change the value of the elements missing to undefined
    entrying_array[index] = undefined;

    // delete all undefined elements
    elements_out = elements_out.filter(function (element) {
        return element !== undefined;
    });
    elements_in = elements_in.filter(function (element) {
        return element !== undefined;
    });
}

/** 
 * This interval will add elements periodically
 * 
 * */ 

let restore_snaps = setInterval(() => {
    if (isDash) {
        if (elements_out.length > 0) {
            rndm_element = elements_out[Math.floor(Math.random() * elements_out.length)];
    
            let app = document.querySelector(".dashboard");
    
            createElement(app, rndm_element,false);
            translateElement(rndm_element.id, true);
    
            console.log("Client: An element has been created: " + rndm_element.id, "Resting elements Out: ", elements_out);
        }
    }
}, 5000);

// ---------------------------------------------------------------------------------
/**
 * This is the method for creating the snaps
 * Parent context will be the element in which elements are added
 * New_snapshot is the object with the data to create
 * IsFirst defines if it's the first time the user enters to dashboard or if it was deleted before
 * 
 * @param {object} parent_context 
 * @param {object} new_snapshot 
 * @param {boolean} isFirst 
 */
function createElement(parent_context, new_snapshot, isFirst) {
    let context = {
        app: parent_context,
        width: window.innerWidth*2,
        height: window.innerHeight,
    };
    
    let snapshot = document.createElement("div");
    snapshot.classList.add("element");
    
    let snap = new Snapshot(snapshot, context, new_snapshot, isFirst);

    context.app.appendChild(snapshot);

    snap.start();

    snapshot.addEventListener('click', () => {
        let to_project = new_snapshot.toProject;

        current_project = projects.find((element) => {
            return element.leader.id == getVars(to_project).leader;
        });

        let media_selected = getVars(to_project).media;
        
        localStorage.setItem('current_project', JSON.stringify(current_project));
        localStorage.setItem('media_selected', JSON.stringify(media_selected));
        
        clearInterval(restore_snaps);
        closeDash();
    });

    snapshot.addEventListener('mouseover', () => {
        snapshot.style.zIndex = '99';
        snap.pause();
    });

    snapshot.addEventListener('mouseout', () => {
        snapshot.style.zIndex = snap.getDepth()+ '';
        snap.start();
    });

    let kill = setInterval (() => {
        if (snap.isAlive() == false) {
            snapshot.remove();
            
            if (elements_in.length > 0) {
                translateElement(new_snapshot.id, false);
            }

            clearInterval(kill);
            console.log("Client: An element has been killed: " + new_snapshot.id, "Resting elements In: ", elements_in);
        } 
    }, 1000);

    setTimeout(() => {
        snapshot.style.opacity = "1";
    }, 200);
};

// ----------------------------------------------------------------------

function closeDash () {
    document.querySelector(".dashboard").style.display = "none";
    document.querySelector(".project").style.display = "block"
    
    isDash = false;
    
    clearInterval(dash_listener);    
    clearInterval(restore_snaps);

    console.log("Client: Intervals of dashboard screen cleaned");
    
    elements_in.forEach(element => {
        translateElement(element.id, false);
    });

    document.querySelectorAll(".element").forEach(element => {
        element.remove();
    }); 

    console.log("Client: Dashboard cleared");

    startProject();
}
