let viewWidth,
    viewHeight,
    canvas = document.getElementById('grain'),
    ctx;

let patternSize = 250,
    patternScaleX = 1,
    patternScaleY = 1,
    patternRefreshInterval = 5,
    patternAlpha = 15;

let patternPixelDataLength = patternSize * patternSize * 4,
    patternCanvas,
    patternCtx,
    patternData,
    frame = 0;

window.onload = function () {
    initCanvas();
    initGrain();
    requestAnimationFrame(loop);
};

function initCanvas() {
    viewWidth = canvas.width = canvas.clientWidth;
    viewHeight = canvas.height = canvas.clientHeight;
    ctx = canvas.getContext('2d');

    ctx.scale(patternScaleX, patternScaleY);
}

function initGrain() {
    patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    patternCtx = patternCanvas.getContext('2d');
    patternData = patternCtx.createImageData(patternSize, patternSize);
}

function updateCanvas() {
    let value;

    for (let i = 0; i < patternPixelDataLength; i += 4) {
        value = (Math.random() * 255) | 0;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
    }

    patternCtx.putImageData(patternData, 0, 0);
}

function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, viewWidth, viewHeight);
}

function loop() {
    if (++frame % patternRefreshInterval === 0) {
        updateCanvas();
        draw();
    }

    requestAnimationFrame(loop);
}