import React from 'react';
import styled from 'styled-components';
import importScripts from '../utils/importScripts';

//

function rotateCanvas(c, angle) {
    c.style['-webkit-transform'] = 'rotate(' + angle + 'deg)';
    c.style['transform'] = 'rotate(' + angle + 'deg)';
    c.style['-ms-transform'] = 'rotate(' + angle + 'deg)';
}
function setTransformSpeed(c, sec) {
    c.style['-webkit-transition'] = 'all ' + sec + 's ease';
    c.style['-moz-transition'] = 'all ' + sec + 's ease';
    c.style['-ms-transition'] = 'all ' + sec + 's ease';
    c.style['-o-transition'] = 'all ' + sec + 's ease';
    c.style['transition'] = 'all ' + sec + 's ease';
}
function start() {
    let c = document.getElementById('pcg-canvas'),
        context = c.getContext('2d'),
        listener,
        centerx = context.canvas.width / 2,
        centery = context.canvas.height / 2,
        circ = Math.PI * 2,
        running = true,
        timeoutId,
        numberOfSegmentsPerCircle = 15,
        circleCenters = [],
        mainCircleRadius = 60,
        smallCircleRadius = 30,
        numberOfCircles = 30,
        animateCircle = function(x, y, r, finishedCallback) {
            context.beginPath();
            var current = 0;
            listener = createjs.Ticker.on('tick', function() {
                if (!running) {
                    return;
                }
                if (current < numberOfSegmentsPerCircle) {
                    context.arc(
                        x,
                        y,
                        r,
                        circ * (current / numberOfSegmentsPerCircle),
                        circ * ((current + 1) / numberOfSegmentsPerCircle),
                        false
                    );
                    context.stroke();
                    current++;
                } else {
                    createjs.Ticker.off('tick', listener);
                    finishedCallback();
                }
            });
        };
    setTransformSpeed(c, 1);
    context.lineWidth = 2;
    context.strokeStyle = '#ccc';
    context.clearRect(0, 0, 200, 200);
    setTimeout(function() {
        createjs.Ticker.setFPS(60);
        if (listener) {
            createjs.Ticker.off('tick', listener);
        }
        clearTimeout(timeoutId);
        for (var i = 0; i < numberOfCircles; i++) {
            circleCenters.push({
                x: centerx + mainCircleRadius * Math.cos(circ * (i / numberOfCircles)),
                y: centery + mainCircleRadius * Math.sin(circ * (i / numberOfCircles)),
                a: circ * (i / numberOfCircles) * 180 / Math.PI
            });
        }
        context.clearRect(0, 0, 200, 200);
        function chooseAndPaintCircle() {
            if (circleCenters.length > 0) {
                var index = Math.floor(Math.random() * circleCenters.length);
                var circle = circleCenters[index];
                circleCenters.splice(index, 1);
                rotateCanvas(c, 270 - circle.a);
                timeoutId = setTimeout(function() {
                    animateCircle(circle.x, circle.y, smallCircleRadius, chooseAndPaintCircle);
                }, 900);
            } else {
                setTransformSpeed(c, 10);
                rotateCanvas(c, 3600);
                setTimeout(function() {
                    setTransformSpeed(c, 1);
                    start();
                }, 11000);
            }
        }
        chooseAndPaintCircle();
    }, 500);
}

const Container = styled.div`
    height: 12em;
    width: 12em;
`;

class CarouselArt extends React.Component {
    componentDidMount() {
        importScripts([
            'https://code.createjs.com/tweenjs-0.6.2.min.js',
            'https://code.createjs.com/easeljs-0.8.2.min.js'
        ]).then(() => {
            start();
        });
    }
    render() {
        return (
            <Container>
                <canvas id="pcg-canvas" width="192" height="192" />
            </Container>
        );
    }
}

export default CarouselArt;
