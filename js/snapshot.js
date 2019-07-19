class Snapshot {

    constructor(container, context, media, isFirst) {

        // This is for the Animation browser compatibility

        window.requestAnimationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame
            || function (f) { return setTimeout(f, 1000 / 60) } // simulate calling code 60 

        window.cancelAnimationFrame = window.cancelAnimationFrame
            || window.mozCancelAnimationFrame
            || function (requestID) { clearTimeout(requestID) } //fall back


        // Those are variable parameter initializer
        this.container = container;
        this.context = context;
        this.media = media;
        this.isFirst = isFirst

        // Those are variables for animations
        this.pos_x;
        this.pos_y;

        this.tam_x;

        this.defineSize();

        this.depth = Math.floor(Math.random() * 4);
        this.speed = this.defineSpeed(this.depth);

        this.defineMedia();
        // To kill the threads and elements
        this.alive;
        this.played;

    }

    /**
     * Will define the z index and the speed of the elements
     * @param {number} depth 
     */
    defineSpeed(depth) {

        if (depth == 0) {
            return .5;
        } else if (depth == 1) {
            return .7;
        } else if (depth == 2) {
            return .8;
        } else if (depth == 3) {
            return .9;
        }

        this.el.style.zIndex = depth + 10;

        return 0;
    }

    /**
     * Will define the position X and Y of the elements
     * If it's first then the position X will be random
     * If it's not, then the position X will be out the screen
     * @param {boolean} isFirst 
     * @param {number} width 
     * @param {number} height 
     */
    definePosition(isFirst, width, height) {

        let pos_x_min = 0;
        let pos_x_max = this.context.width - ((this.context.width / 100) * width);
        
        
        let pos_y_min = 0;
        let pos_y_max = this.context.height - ((this.context.height / 100) * height) - 200;
        

        let pos_x;

        isFirst ?
            pos_x = Math.floor(Math.random() * (pos_x_max - pos_x_min)) + pos_x_min :
            pos_x = this.context.width + width;
        
        const determined_height = this.context.height / 5;

        const pos_y_pos = [determined_height, determined_height*2, determined_height*3];
        let index = Math.floor(Math.random() * pos_y_pos.length),
            pos_y = pos_y_pos[index];
    
            //let pos_y = Math.floor(Math.random() * (pos_y_max - pos_y_min)) + pos_y_min;

        this.pos_x = pos_x;
        this.pos_y = pos_y;

        this.container.style.left = pos_x + 'px';
        this.container.style.top = pos_y + 'px';
    }

    /**
     * The sizes are defined there, Width will select of an array
     * of sizes, and height will be defined respecting the ratio
     */
    defineSize() {
        const widths = [15, 20, 25];
        let index = Math.floor(Math.random() * widths.length),
            width_selected = widths[index];

        const ratios = ['normal', 'wide']
        let height_selected = ratios[Math.floor(Math.random() * ratios.length)];
        let height;
        height_selected === 'normal' ? height = ((width_selected * 3) / 4) : height = ((width_selected * 9) / 16);

        this.container.style.width = width_selected + 'vw';
        this.container.style.height = height + 'vw';

        this.tam_x = width_selected;
        this.definePosition(this.isFirst, width_selected, height);
    }

    // This will handle the animation to activate out the class
    start() {
        this.played = true;
        requestAnimationFrame(() => this.move());
    }

    pause() {
        this.played = false;
    }

    //The animation of movement
    move() {
        if (this.played) {
            if (this.pos_x > - ((this.context.width / 100) * this.tam_x)) {
                requestAnimationFrame(() => this.move());
                this.container.style.left = this.pos_x;
    
                this.pos_x = this.pos_x - this.speed;
            } else {
                cancelAnimationFrame(() => this.move());
                // killing the element
                this.alive = false;
                this.played = false;
            }
        }
    }

    defineMedia () {
        console.log(this.media, "this is the media to work");
        switch (this.media.type) {
            case 0:
                const text = document.createElement('p');
                text.innerHTML = this.media.source;
                text.classList.add("text-element");
                this.container.classList.add("text-parent");
                this.container.appendChild(text);
                break;
            case 1:
                const img = document.createElement('div');
                img.classList.add("img-element");

                img.style.backgroundImage = 'url("https://www.federacioncolombianadegolf.com/website/images/stories/2017/Nacionales/SuramericanoJuvenil-17-01.jpg")'; 
                
                this.container.appendChild(img);
                break;
            case 2: 
                const video = document.createElement('img');
                video.classList.add("video-element");
                video.style.backgroundImage = 'url('+this.media.thumb+')'; 

                this.container.appendChild(video);
                break;
            }
    }

    getSpeed() {
        return this.speed;
    }
    getDepth() {
        return this.depth;
    }
    isAlive() {
        return this.alive;
    }

}




