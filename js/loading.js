const logo = document.querySelectorAll(".loading__animation__svg rect");
const arrayColors = ["81B57C", "AF597", "B0AC9F", "BB48C1", "BF4450", "61B3B2",
    "608566", "A04A6C", "898679", "B240B9", "C0B34C", "814A9E", "78A890", "514E79", "C09C7E",
    "BE4266", "61B3B2", "568981", "625F8B", "936E51", "A66E42", "814A9E", "978A8E",
    "AC765A", "8C6266", "85B461", "BF4450", "877A7D", "AC765A", "B2898D", "77A654", "C0B34C",
];
let cancel_changing_colors = true;

// This var will declare when the interface is ready to be initialized
let loaded;

requestAnimationFrame(() => changeColors());

/**
 * The changeColors function will work for the initial animation.
 * If cancel_changing_colors is true, then changeColors'll stop calling itself
 * and the animation is finished
 */
function changeColors() {
    setTimeout(() => {
        if (cancel_changing_colors) requestAnimationFrame(() => changeColors());
    }, 100);          

    logo.forEach(element => {
        let index = Math.floor(Math.random() * (arrayColors.length));
        element.style.fill = "#" + arrayColors[index - 1];
    });                        
}

/**
 * Loaded will be changed when every element have loaded
 * When this ocurrs, the button will be avaible to press,
 * and the animation will cancel, as the animation element
 * */
const load_interval = setInterval(() => {
    if (loaded) {
        const loading_button = document.querySelector(".loading__btn");
        
        loading_button.innerHTML = "Iniciar";

        loading_button.classList.remove('btn--disabled');
        loading_button.classList.add('btn--avaible');
        
        cancel_changing_colors = false;
        
        document.querySelector(".loading__animation__svg") &&
        document.querySelector(".loading__animation__svg").remove();

        document.querySelector(".loading__btn").addEventListener("click", () => {
            clearInterval(load_interval);

            document.querySelector(".loading") &&
            document.querySelector(".loading").remove();

            document.querySelector(".app").style.display = "block";
            intro_vid.play();
        });   
    }
    setTimeout(()=> {
        clearInterval(load_interval);
    },4100);

}, 3000);


