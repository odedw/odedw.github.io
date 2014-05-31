(function() {
    var c = document.getElementById('pcg-canvas'),
        context = c.getContext("2d"),
        centerx = context.canvas.width / 2,
        centery = context.canvas.height / 2,
        a = 1,
        b = 1.3,
        i = 0,
        clearing = false,
        ticker = null,
        running = true,
        paintSegment = function () {       
            console.log('tick');
            if (i >= 720) {
                clearing = !clearing;
                if (!clearing) {
                    context.clearRect(0, 0, 200, 200);

                }
                context.beginPath();
                context.strokeStyle = clearing ? "#282828" : "#fff";
                context.lineWidth = clearing ? 3 : 1;
                context.moveTo(centerx, centery);            
                i = 0;            
            }
            if (i < 720) {        
                angle = 0.1 * i;
                x = centerx + (a + b * angle) * Math.cos(angle);
                y = centery + (a + b * angle) * Math.sin(angle);
                context.lineTo(x, y);
                context.stroke();            
                i++;    
            }
        };
        
    context.clearRect(0, 0, 200, 200);
    context.moveTo(centerx, centery);
    context.lineWidth = 1;
    context.strokeStyle = "#fff";

    $(function(){
        ticker = new RAFTicker();
        ticker.start(30, paintSegment);
    });

    $('#pcg-canvas').click(function(){
        if (running) {
            ticker.stop();
        }
        else{
            ticker.start(30,paintSegment);
        }
        running = !running;
    });
}());