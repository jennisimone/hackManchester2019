const moneyBackground = {
    moneyHeight: 100,
    moneyWidth: 205,
    moneys: [],
    moneyImage: '',
    maxMoney: 8,
    minScale: 0.4,
    setImage: function (imageRef) {
        this.moneyImage = imageRef;
    },
    draw: function () {
        this.setCanvasSize();
        this.ctx.clearRect(0, 0, this.w, this.h);
        for (let i = 0; i < this.moneys.length; i++) {
            let money = this.moneys[i];
            money.image = new Image();
            money.image.style.height = money.height;
            money.image.src = this.moneyImage;
            this.ctx.globalAlpha = money.opacity;
            this.ctx.drawImage(money.image, money.x, money.y, money.width, money.height);
        }
        this.move();
    },
    move: function () {
        for (let b = 0; b < this.moneys.length; b++) {
            let money = this.moneys[b];
            money.y += money.ys;
            if (money.y > this.h) {
                money.x = Math.random() * this.w;
                money.y = -1 * this.moneyHeight;
            }
        }
    },
    setCanvasSize: function () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.w = this.canvas.width;
        this.h = this.canvas.height;
    },
    initialize: function () {
        this.canvas = $('#canvas')[0];

        if (!this.canvas.getContext)
            return;

        this.setCanvasSize();
        this.ctx = this.canvas.getContext('2d');

        for (let a = 0; a < this.maxMoney; a++) {
            let scale = (Math.random() * (1 - this.minScale)) + this.minScale;
            this.moneys.push({
                x: Math.random() * this.w,
                y: Math.random() * this.h,
                ys: Math.random() + 1,
                height: scale * this.moneyHeight,
                width: scale * this.moneyWidth,
                opacity: scale
            });
        }

        setInterval($.proxy(this.draw, this), 20);
    }
};