import React from 'react';
import styled from 'styled-components';
import importScripts from '../utils/importScripts';

let stage,
    color = '#ccc',
    limit = -30000,
    s = 180,
    time,
    r,
    startAngle = 0,
    rotationAngle,
    w,
    h,
    circlePos,
    listener,
    point = { x: 0, y: 0 },
    square,
    sb,
    circleContainer,
    circle,
    pen,
    trace;

function init() {
    stage = new createjs.Stage('circle-canvas');
    stage.removeAllChildren();
    stage.clear();
    w = stage.canvas.width;
    h = stage.canvas.height;

    circlePos = 'tl';
    r = 30;
    time = 500;
    rotationAngle = -((s - 2 * r) / (2 * r * Math.PI)) * 360;

    //shapes
    square = new createjs.Shape();
    square.graphics.s(color).dr((w - s) / 2, (h - s) / 2, s, s);
    square.setBounds((w - s) / 2, (h - s) / 2, s, s);
    sb = square.getBounds();

    circle = new createjs.Shape();
    circle.graphics.s(color).dc(r, r, r);

    pen = new createjs.Shape();
    pen.graphics.f('#fff').dc(r + r * Math.cos(startAngle), r + r * Math.sin(startAngle), 2);

    circleContainer = new createjs.Container();
    circleContainer.addChild(circle, pen);
    circleContainer.x = sb.x + r;
    circleContainer.y = sb.y + r;
    circleContainer.regX = circleContainer.regY = r;

    trace = new createjs.Shape();
    calcPenLocation();
    trace.graphics.s('#fff').mt(point.x, point.y);

    stage.addChild(square, circleContainer, trace);

    listener = createjs.Ticker.on('tick', tick);
    createjs.Ticker.setFPS(60);

    nextAnimationSegment();
}

function nextAnimationSegment() {
    var target = { x: circleContainer.x, y: circleContainer.y },
        nextPos;
    switch (circlePos) {
        case 'tl':
            target.x = circleContainer.x + sb.width - 2 * r;
            nextPos = 'tr';
            break;
        case 'tr':
            target.y = circleContainer.y + sb.height - 2 * r;
            nextPos = 'br';
            break;
        case 'br':
            target.x = sb.x + r;
            nextPos = 'bl';
            break;
        case 'bl':
            target.y = sb.y + r;
            nextPos = 'tl';
            break;
    }

    createjs.Tween
        .get(circleContainer)
        .to(
            { rotation: circleContainer.rotation + rotationAngle, x: target.x, y: target.y },
            time,
            createjs.Ease.quadInOut
        )
        .call(function() {
            if (circleContainer.rotation < limit) {
                createjs.Ticker.off('tick', listener);
                init();
                return;
            }
            circlePos = nextPos;
            nextAnimationSegment();
        });
}
function tick(event) {
    stage.update(event);
    calcPenLocation();
    trace.graphics.lt(point.x, point.y);
}

function stop() {
    createjs.Ticker.off('tick', listener);
}

function calcPenLocation() {
    var containerAngle = (circleContainer.rotation % 360) * Math.PI / 180;
    point.x = circleContainer.x + r * Math.cos(containerAngle);
    point.y = circleContainer.y + r * Math.sin(containerAngle);
    return point;
}

const Container = styled.div`
    height: 12em;
    width: 12em;
`;
class CircleArt extends React.Component {
    componentDidMount() {
        importScripts([
            'https://code.createjs.com/tweenjs-0.6.2.min.js',
            'https://code.createjs.com/easeljs-0.8.2.min.js'
        ]).then(() => {
            init();
        });
    }

    componentWillUnmount() {
        stop();
    }
    render() {
        return (
            <Container>
                <canvas id="circle-canvas" width="192" height="192" />
            </Container>
        );
    }
}

export default CircleArt;
