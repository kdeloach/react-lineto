import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import LineTo, { Line } from '../src/index.jsx';

function Demo() {
    return (
        <div style={{ paddingBottom: '200px' }}>
            <LineTest />
            <RotationTest />
            <HoverTest />
            <DelayTest />
        </div>
    );
}

class Block extends Component {
    render() {
        const { top, left, color, className } = this.props;
        const style = { top, left, backgroundColor: color };
        return (
            <div
                className={`block ${className}`}
                style={style}
                onMouseOver={this.props.onMouseOver}
                onMouseOut={this.props.onMouseOut}
            >
                {this.props.children}
            </div>
        );
    }
}

Block.propTypes = {
    children: PropTypes.any,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
    top: PropTypes.string,
    left: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

// Draw a star to demonstrate base Line component.
class LineTest extends Component {
    render() {
        return (
            <div>
                <Line x0={20} y0={10}
                      x1={20} y1={40} />
                <Line x0={5} y0={25}
                      x1={35} y1={25} />
                <Line x0={10} y0={15}
                      x1={30} y1={35} />
                <Line x0={30} y0={15}
                      x1={10} y1={35} />
            </div>
        );
    }
}

// Demonstrate how to draw a line between moving components.
class RotationTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ticks: 0,
            paused: false,
        };
        this.togglePause = this.togglePause.bind(this);
    }

    componentDidMount() {
        this.startAnimation();
    }

    componentWillUnmount() {
        this.stopAnimation();
    }

    startAnimation() {
        const step = () => {
            this.setState(Object.assign({}, this.state, {
                ticks: this.state.ticks + 1,
            }));
            this.frame = requestAnimationFrame(step);
        };
        step();
    }

    stopAnimation() {
        cancelAnimationFrame(this.frame);
    }

    togglePause() {
        const paused = !this.state.paused;
        if (paused) {
            this.stopAnimation();
        } else {
            this.startAnimation();
        }
        this.setState(Object.assign({}, this.state, { paused }));
    }

    renderPauseButton() {
        const text = this.state.paused ? 'Play' : 'Pause';
        return (
            <button onClick={this.togglePause}>{text}</button>
        );
    }

    render() {
        const ox = 300;
        const oy = 120;
        const r = 100;

        const t = this.state.ticks * Math.PI / 180;

        const x = Math.cos(t) * r + ox;
        const y = Math.sin(t) * r + oy;

        return (
            <fieldset id="rotation-test">
                <legend>Rotation Test</legend>
                {this.renderPauseButton()}
                <Block
                    className="item-G"
                    top={`${y}px`}
                    left={`${x}px`}
                    color="#0f0"
                    >G</Block>
                <Block
                    className="item-H"
                    top={`${oy}px`}
                    left={`${ox}px`}
                    color="#f00"
                    >H</Block>
                <LineTo
                    from="item-G"
                    to="item-H"
                    border="2px solid blue"
                    className="line-XYZ" />
            </fieldset>
        );
    }
}

// Demonstrate how to draw a line from one component to another
// in response to a hover event.
class HoverTest extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            from: null,
            to: null,
        };
        this.state = this.initialState;
        this.clearLine = this.clearLine.bind(this);
        this.drawLine = this.drawLine.bind(this);
    }
    clearLine() {
        this.setState(this.initialState);
    }

    drawLine(from, to) {
        this.setState({ from, to });
    }

    render() {
        const { from, to } = this.state;
        const line = from && to ? (
            <LineTo
                from={from}
                to={to}
                fromAnchor="middle right"
                toAnchor="middle left"
                border="3px solid #f00"
            />
        ) : null;
        return (
            <fieldset id="hover-test">
                <legend>Hover Test</legend>
                <Block
                    className="item-A"
                    top="20px"
                    left="10px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('item-A', 'item-F')}
                    onMouseOut={this.clearLine}
                    >A</Block>
                <Block
                    className="item-B"
                    top="80px"
                    left="10px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('item-B', 'item-E')}
                    onMouseOut={this.clearLine}
                    >B</Block>
                <Block
                    className="item-C"
                    top="140px"
                    left="10px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('item-C', 'item-D')}
                    onMouseOut={this.clearLine}
                    >C</Block>
                <Block
                    className="item-D"
                    top="20px"
                    left="300px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('item-D', 'item-C')}
                    onMouseOut={this.clearLine}
                    >D</Block>
                <Block
                    className="item-E"
                    top="80px"
                    left="300px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('item-E', 'item-B')}
                    onMouseOut={this.clearLine}
                    >E</Block>
                <Block
                    className="item-F"
                    top="140px"
                    left="300px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('item-F', 'item-A')}
                    onMouseOut={this.clearLine}
                    >F</Block>
                {line}
            </fieldset>
        );
    }
}

// Demonstrate how to draw a line to a component which may not yet
// exist at the moment that the LineTo component has been mounted.
class DelayTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetVisible: false,
        };
    }

    render() {
        const target = this.state.targetVisible ? (
            <Block
                className="item-J"
                top="30px"
                left="300px"
                color="#f00"
                >F</Block>
        ) : null;
        return (
            <fieldset id="delay-test">
                <legend>Delay Test</legend>
                <Block
                    className="item-I"
                    top="30px"
                    left="20px"
                    color="#00f"
                    onMouseOver={() => this.setState({ targetVisible: true })}
                    onMouseOut={() => this.setState({ targetVisible: false })}
                    >E</Block>
                {target}
                <LineTo
                    from="item-I"
                    to="item-J"
                    fromAnchor="75% 75%"
                    toAnchor="25% 25%"
                    border="2px dotted #0f0"
                    delay={1} />
            </fieldset>
       );
    }
}

function createRootElement() {
    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);
    return root;
}

function getRootElement() {
    return document.getElementById('root') ||
        createRootElement();
}

render(
    <Demo />,
    getRootElement()
);
