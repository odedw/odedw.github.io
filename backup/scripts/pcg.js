(function () {
  var c = document.getElementById('pcg-canvas'),
  context = c.getContext("2d"), stage, listener,
  centerx = context.canvas.width / 2, centery = context.canvas.height / 2, circ = Math.PI * 2,
  running = true, timeoutId,
  fps = 60, numberOfSegmentsPerCircle = 15, circleCenters = [], mainCircleRadius = 60, smallCircleRadius = 30, numberOfCircles = 30,
  animateCircle = function (x, y, r, finishedCallback) {
    context.beginPath();
    var current = 0;
    listener = createjs.Ticker.on("tick", function () {
      if (!running) {
        return;
      }
      if (current < numberOfSegmentsPerCircle) {
        context.arc(x, y, r, circ * (current / numberOfSegmentsPerCircle), circ * ((current + 1) / numberOfSegmentsPerCircle), false);
        context.stroke();
        current++;
      } else {
        createjs.Ticker.off("tick", listener);
        finishedCallback();
      }
    });
  };

  context.lineWidth = 2;
  context.strokeStyle = "#ccc";
  function rotateCanvas(angle){
    c.style['-webkit-transform'] = 'rotate('+angle+'deg)';
    c.style['transform'] = 'rotate('+angle+'deg)';
    c.style['-ms-transform'] = 'rotate('+angle+'deg)';
  }
  function setTransformSpeed(sec){
    c.style['-webkit-transition'] = 'all '+sec+'s ease';
    c.style['-moz-transition'] = 'all '+sec+'s ease';
    c.style['-ms-transition'] = 'all '+sec+'s ease';
    c.style['-o-transition'] = 'all '+sec+'s ease';
    c.style['transition'] = 'all '+sec+'s ease';
  }
  function start() {
    context.clearRect(0, 0, 200, 200);
    setTimeout(function () {
      createjs.Ticker.setFPS(60);
      if (listener) {
        createjs.Ticker.off("tick", listener);
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
  document.addEventListener("DOMContentLoaded", function() {
    start();

  });

}());
