// Create a canvas - done
// Create a circle
// randomise circle properties
// add cirlces to the canvas
// animate circles
//<div><canvas id="snowCanvas" width="100%" height="100%"></canvas></div>

(function () {
//Get canvas element.
    var snowCanvas = document.getElementById('myCanvas');
//Get canvas context.
    var snowContext = snowCanvas.getContext("2d");

    var totalSnowParticles = 100;
    var snowParticles = [];
//canvas resize.
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        snowCanvas.width = window.innerWidth;
        snowCanvas.height = window.innerHeight;
        drawNewSnow();
    }

    function drawNewSnow() {
        for (var circleIndex = 0; circleIndex < totalSnowParticles; circleIndex++) {
            var snowCenterX = Math.random() * snowCanvas.width;
            var snowCenterY = Math.random() * snowCanvas.height;
            var snowRadius = Math.random() * 4 + 1;
            var snowDensity = Math.random() * totalSnowParticles;
            var newSnow = new Snow(snowCenterX, snowCenterY, snowRadius, snowDensity, snowContext);
            snowParticles.push(newSnow);
        }
    }

    function updateSnow() {
        snowContext.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
        var snowParticle;
        for (snowIndex = 0; snowIndex < snowParticles.length; snowIndex++) {
            snowParticle = snowParticles[snowIndex];
            snowParticle.update();
        }
    }

    resizeCanvas();
    setInterval(updateSnow, 33);
})();
