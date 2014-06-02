(function () {
    var c = document.getElementById('pcg-canvas'), $c = $(c),
        context = c.getContext("2d"), ticker,
        centerx = context.canvas.width / 2, centery = context.canvas.height / 2, circ = Math.PI * 2,
        running = true, timeoutId,
        fps = 60, numberOfSegmentsPerCircle = 15, circleCenters = [], mainCircleRadius = 60, smallCircleRadius = 30, numberOfCircles = 30,
        animateCircle = function (x, y, r, finishedCallback) {
            context.beginPath();
            var current = 0;
            ticker.start(fps, function () {
                if (!running) {
                    return;
                }
                if (current < numberOfSegmentsPerCircle) {
                    context.arc(x, y, r, circ * (current / numberOfSegmentsPerCircle), circ * ((current + 1) / numberOfSegmentsPerCircle), false);
                    context.stroke();
                    current++;
                } else {
                    ticker.stop();   
                    finishedCallback();
                }
            });
        };            

    context.lineWidth = 2;
    context.strokeStyle = "#ccc";
    function rotateCanvas(angle){
        $c.css('-webkit-transform','rotate('+angle+'deg)');
        $c.css('transform','rotate('+angle+'deg)');
        $c.css('-ms-transform','rotate('+angle+'deg)');
    }
    function setTransformSpeed(sec){
        $c.css('-webkit-transition','all '+sec+'s ease');
        $c.css('-moz-transition','all '+sec+'s ease');
        $c.css('-ms-transition','all '+sec+'s ease');
        $c.css('-o-transition','all '+sec+'s ease');
        $c.css('transition','all '+sec+'s ease');    
    }
    function start() {
        context.clearRect(0, 0, 200, 200);        
        setTimeout(function () {
            if (ticker) {
                ticker.stop();
            } else {
                ticker = new RAFTicker();   
            }
            clearTimeout(timeoutId);
            for (var i = 0; i<numberOfCircles; i++) {
                circleCenters.push({ 
                    x: centerx + mainCircleRadius * Math.cos(circ * (i / numberOfCircles)),
                    y: centery + mainCircleRadius * Math.sin(circ * (i / numberOfCircles)),
                    a: (circ * (i / numberOfCircles)) * 180 / Math.PI
                });
            }
            context.clearRect(0,0,200,200);
            function chooseAndPaintCircle () {
                if (circleCenters.length > 0){
                    var index = Math.floor((Math.random() * circleCenters.length));
                    var circle = circleCenters[index];
                    circleCenters.splice(index,1);
                    rotateCanvas(270 - circle.a);
                    timeoutId = setTimeout(function(){
                        animateCircle(circle.x,circle.y,smallCircleRadius,chooseAndPaintCircle);
                    },900);
                }
                else{
                    setTransformSpeed(10);
                    rotateCanvas(3600);
                    setTimeout(function(){      
                        setTransformSpeed(1);
                        start();
                    },11000);
                }
            };
            chooseAndPaintCircle();
        },500); 
    }

    $(function(){
        start();
    });

}());