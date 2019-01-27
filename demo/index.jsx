import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

import LineTo, { SteppedLineTo, Line } from '../src/index.jsx';

function Demo() {
    return (
        <div>
            <PolygonTest />
            <SteppedTest />
            <HoverTest />
            <DelayTest />
            <TreeTest />
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

class PolygonTest extends Component {
    makeShape(x, y, n, initialAngle) {
        const elems = [];
        const lineLength = 100;
        const angle = Math.PI - Math.PI / n;

        let x0 = x;
        let y0 = y;

        for (let i = 0, theta = initialAngle; i < n; i += 1, theta += angle) {
            const x1 = x0 + lineLength * Math.cos(theta);
            const y1 = y0 + lineLength * Math.sin(theta);
            elems.push(<Line key={i} x0={x0} y0={y0} x1={x1} y1={y1} />);
            x0 = x1;
            y0 = y1;
        }

        return elems;
    }

    render() {
        const triangle = this.makeShape(80, 75, 3, Math.PI / 3);
        const star = this.makeShape(150, 105, 5, 0);
        const ngon = this.makeShape(280, 85, 7, Math.PI / 7);

        return (
            <fieldset id="polygon-test">
                <legend>Polygon Test</legend>

                Demonstrate how to draw absolutely positioned line segments.

                {triangle}
                {star}
                {ngon}
            </fieldset>
        );
    }
}

class SteppedTest extends Component {
    render() {
        const style = {
            delay: true,
            borderColor: '#ddd',
            borderStyle: 'solid',
            borderWidth: 3,
        };
        return (
            <fieldset id="stepped-test">
                <legend>Stepped Test</legend>

                Demonstrate how to draw stepped lines.

                <Block
                    className="stepped-A"
                    top="50px"
                    left="90px"
                    color="#00f"
                    >A</Block>
                <Block
                    className="stepped-B"
                    top="150px"
                    left="20px"
                    color="#00f"
                    >B</Block>
                <Block
                    className="stepped-C"
                    top="150px"
                    left="90px"
                    color="#00f"
                    >C</Block>
                <Block
                    className="stepped-D"
                    top="150px"
                    left="160px"
                    color="#00f"
                    >D</Block>
                <Block
                    className="stepped-E"
                    top="50px"
                    left="300px"
                    color="#00f"
                    >E</Block>
                <Block
                    className="stepped-F"
                    top="120px"
                    left="300px"
                    color="#00f"
                    >F</Block>
                <SteppedLineTo from="stepped-A" to="stepped-B"
                    fromAnchor="bottom" toAnchor="top" {...style} />
                <SteppedLineTo from="stepped-A" to="stepped-C"
                    fromAnchor="bottom" toAnchor="top" {...style} />
                <SteppedLineTo from="stepped-A" to="stepped-D"
                    fromAnchor="bottom" toAnchor="top" {...style} />
                <SteppedLineTo from="stepped-A" to="stepped-E"
                    fromAnchor="right" toAnchor="left" orientation="h" {...style} />
                <SteppedLineTo from="stepped-A" to="stepped-F"
                    fromAnchor="right" toAnchor="left" orientation="h" {...style} />
            </fieldset>
        );
    }
}

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
                borderWidth={3}
            />
        ) : null;
        return (
            <fieldset id="hover-test">
                <legend>Hover Test</legend>

                Demonstrate how to draw a line from one component to another
                in response to a hover event.

                <Block
                    className="hover-A"
                    top="80px"
                    left="20px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('hover-A', 'hover-F')}
                    onMouseOut={this.clearLine}
                    >A</Block>
                <Block
                    className="hover-B"
                    top="140px"
                    left="20px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('hover-B', 'hover-E')}
                    onMouseOut={this.clearLine}
                    >B</Block>
                <Block
                    className="hover-C"
                    top="200px"
                    left="20px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('hover-C', 'hover-D')}
                    onMouseOut={this.clearLine}
                    >C</Block>
                <Block
                    className="hover-D"
                    top="80px"
                    left="300px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('hover-D', 'hover-C')}
                    onMouseOut={this.clearLine}
                    >D</Block>
                <Block
                    className="hover-E"
                    top="140px"
                    left="300px"
                    color="#00f"
                    onMouseOver={() => this.drawLine('hover-E', 'hover-B')}
                    onMouseOut={this.clearLine}
                    >E</Block>
                <Block
                    className="hover-F"
                    top="200px"
                    left="300px"
                    color="#0f0"
                    onMouseOver={() => this.drawLine('hover-F', 'hover-A')}
                    onMouseOut={this.clearLine}
                    >F</Block>
                {line}
            </fieldset>
        );
    }
}

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
                className="delay-F"
                top="80px"
                left="300px"
                color="#f00"
                >F</Block>
        ) : null;
        return (
            <fieldset id="delay-test">
                <legend>Delay Test</legend>

                Demonstrate how to draw a line to a component which does not
                exist at the moment that the LineTo component has been mounted.

                <Block
                    className="delay-E"
                    top="80px"
                    left="20px"
                    color="#00f"
                    onMouseOver={() => this.setState({ targetVisible: true })}
                    onMouseOut={() => this.setState({ targetVisible: false })}
                    >E</Block>
                {target}
                <LineTo
                    from="delay-E"
                    to="delay-F"
                    fromAnchor="75% 75%"
                    toAnchor="25% 25%"
                    borderColor="#0f0"
                    borderStyle="dotted"
                    borderWidth={2}
                    delay={1} />
            </fieldset>
       );
    }
}

class TreeTest extends Component {
    render() {
      return (
        <fieldset id="tree-test">
            <legend>Tree Test</legend>
            <div className="tree-test-wrap">
                <TreeItem name="" depth={0} index={0} />
            </div>
        </fieldset>
      );
    }
  }

  class TreeItem extends Component {
    render() {
        const style = {
            delay: true,
            borderColor: '#ddd',
            borderStyle: 'solid',
            borderWidth: 3
        };
        const h = ({ _: 20, A: 120, B: 100, C: 200, D: 50 })[this.props.name[0] || '_'];
        const l = Math.ceil(((this.props.index + 2) / 20) * 100) + 10 * (this.props.depth + 1);
        return (
            <div className="tree-item">
                <div className="tree-block-wrap">
                    <Block className={`tree-${this.props.name}`} color={`hsl(${h}, 100%, ${l}%)`}>
                        {this.props.name || 'X'}
                    </Block>
                </div>
                {this.props.depth < 2 ? (
                    <div className="tree-column">
                        {Array(Math.ceil(Math.random() * 3) + 1).fill(null).
                            map((_, i) => (
                                <TreeItem
                                    parent={this}
                                    index={this.props.index * this.props.depth + i}
                                    name={`${this.props.name}${String.fromCharCode(65 + i)}`}
                                    depth={this.props.depth + 1}
                                />
                            ))
                        }
                    </div>
                ) : null}
                {this.props.parent ? (
                    <SteppedLineTo
                        within="tree-test-wrap"
                        from={`tree-${this.props.parent.props.name}`}
                        to={`tree-${this.props.name}`}
                        fromAnchor="right"
                        toAnchor="left"
                        orientation="h"
                        {...style} />
                ) : null}
            </div>
      );
    }
  }

  TreeItem.propTypes = {
    depth: PropTypes.number,
    index: PropTypes.number,
    parent: PropTypes.instanceOf(TreeItem),
    name: PropTypes.string
  };

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
