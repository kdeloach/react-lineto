import PropTypes from 'prop-types';
import React, { Component, PureComponent } from 'react';

const defaultAnchor = { x: 0.5, y: 0.5 };

const optionalStyleProps = {
    className: PropTypes.string,
    border: PropTypes.string,
    zIndex: PropTypes.number,
    style: PropTypes.object,
};

export default class LineTo extends Component {
    componentWillMount() {
        this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
        this.toAnchor = this.parseAnchor(this.props.toAnchor);
    }

    componentDidMount() {
        if (typeof this.props.delay !== 'undefined') {
            this.deferUpdate(this.props.delay);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fromAnchor !== this.props.fromAnchor) {
            this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
        }
        if (nextProps.toAnchor !== this.props.toAnchor) {
            this.toAnchor = this.parseAnchor(this.props.toAnchor);
        }
        if (typeof nextProps.delay !== 'undefined') {
            this.deferUpdate(nextProps.delay);
        }
    }

    shouldComponentUpdate() {
        // Always update component if the parent component has been updated.
        // The reason for this is that we would not only like to update
        // this component when the props have changed, but also when
        // the position of our target elements has changed.
        // We could return true only if the positions of `from` and `to` have
        // changed, but that may be expensive and unnecessary.
        return true;
    }

    // Forced update after delay (MS)
    deferUpdate(delay) {
        clearTimeout(this.t);
        this.t = setTimeout(() => this.forceUpdate(), delay);
    }

    parseAnchorPercent(value) {
        const percent = parseFloat(value) / 100;
        if (isNaN(percent) || !isFinite(percent)) {
            throw new Error(`LinkTo could not parse percent value "${value}"`);
        }
        return percent;
    }

    parseAnchorText(value) {
        // Try to infer the relevant axis.
        switch (value) {
            case 'top':
                return { y: 0 };
            case 'left':
                return { x: 0 };
            case 'middle':
                return { y: 0.5 };
            case 'center':
                return { x: 0.5 };
            case 'bottom':
                return { y: 1 };
            case 'right':
                return { x: 1 };
        }
        return null;
    }

    parseAnchor(value) {
        if (!value) {
            return defaultAnchor;
        }
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('LinkTo anchor format is "<x> <y>"');
        }
        const [x, y] = parts;
        return Object.assign({}, defaultAnchor,
            this.parseAnchorText(x) || { x: this.parseAnchorPercent(x) },
            this.parseAnchorText(y) || { y: this.parseAnchorPercent(y) }
        );
    }

    findElement(className) {
        return document.getElementsByClassName(className)[0];
    }

    detect() {
        const { from, to } = this.props;

        const a = this.findElement(from);
        const b = this.findElement(to);

        if (!a || !b) {
            return false;
        }

        const anchor0 = this.fromAnchor;
        const anchor1 = this.toAnchor;

        const box0 = a.getBoundingClientRect();
        const box1 = b.getBoundingClientRect();

        const offsetX = window.pageXOffset;
        const offsetY = window.pageYOffset;

        const x0 = box0.left + box0.width * anchor0.x + offsetX;
        const x1 = box1.left + box1.width * anchor1.x + offsetX;
        const y0 = box0.top + box0.height * anchor0.y + offsetY;
        const y1 = box1.top + box1.height * anchor1.y + offsetY;

        return { x0, y0, x1, y1 };
    }

    render() {
        const points = this.detect();
        return points ? (
            <Line {...points} {...this.props} />
        ) : null;
    }
}

LineTo.propTypes = Object.assign({}, {
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    fromAnchor: PropTypes.string,
    toAnchor: PropTypes.string,
    delay: PropTypes.number,
}, optionalStyleProps);

export class Line extends PureComponent {
    componentDidMount() {
        // Append rendered DOM element to body so we don't have
        // to factor in element offsets.
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        const { x0, y0, x1, y1 } = this.props;

        const dy = y1 - y0;
        const dx = x1 - x0;

        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const length = Math.sqrt(dx * dx + dy * dy);

        const positionStyle = {
            position: 'absolute',
            top: `${y0}px`,
            left: `${x0}px`,
            width: `${length}px`,
            zIndex: this.props.zIndex || '1',
            transform: `rotate(${angle}deg)`,
            // Rotate around (x0, y0)
            transformOrigin: '0 0',
        };

        const defaultStyle = {
            height: '1px',
            borderTop: this.props.border || '1px solid #f00',
        };

        const props = {
            className: this.props.className,
            style: Object.assign({}, defaultStyle, this.props.style, positionStyle),
        }

        // We need a wrapper element to prevent an exception when then
        // React component is removed. This is because we manually
        // move the rendered DOM element after creation.
        return (
            <div className="react-lineto-placeholder">
                <div
                    ref={(el) => { this.el = el; }}
                    {...props}
                 />
            </div>
        );
    }
}

Line.propTypes = Object.assign({}, {
    x0: PropTypes.number.isRequired,
    y0: PropTypes.number.isRequired,
    x1: PropTypes.number.isRequired,
    y1: PropTypes.number.isRequired,
}, optionalStyleProps);
