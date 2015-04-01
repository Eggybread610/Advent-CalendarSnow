function Snow(snowCenterX, snowCenterY, snowRadius, snowDensity, context) {
    this.x = snowCenterX;
    this.y = snowCenterY;
    this.radius = snowRadius;
    this.density = snowDensity;
    this.context = context;
    this.updateCount = 0;
    this.updateTarget = 200;
    this.angle = 0.2;
    this.alpha = 1.0;

    this.update = function() {
        this.updateCount += 1;
        if (this.updateCount >= this.updateTarget) {
            this.angle *= -1;
            this.updateCount = 0;
            this.updateTarget = (Math.random() * 100) + 100;
        }

        this.x += (Math.sin(this.angle) * 2);
        this.y += (Math.cos(this.angle + this.density) + (this.radius - 0.5));

        if (this.x < 0-this.radius || this.x > window.innerWidth+this.radius) {
            this.x = Math.random() * window.innerWidth;
            this.y = 0-this.radius;
        }

        if (this.y > window.innerHeight-this.radius) {
            this.y = window.innerHeight - (this.radius+1);
            this.angle = 0;
            this.alpha -= 0.01;
        }

        if (this.alpha <= 0) {
            this.y = 0-this.radius;
            this.alpha = 1;
        }

        this.draw();
    };
    this.draw = function() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = '#FFFFFF';
        this.context.globalAlpha = this.alpha;
        this.context.fill();
    };

    this.draw();
}



