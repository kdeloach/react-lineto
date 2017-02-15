import React, { Component, PropTypes } from 'react';

export default class LineTo extends Component {
    componentWillMount() {
        const defaultAnchor = '50% 50%';
        this.fromAnchor = this.parseAnchor(this.props.fromAnchor || defaultAnchor);
        this.toAnchor = this.parseAnchor(this.props.toAnchor || defaultAnchor);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fromAnchor !== this.props.fromAnchor) {
            this.fromAnchor = this.parseAnchor(this.props.fromAnchor);
        }
        if (nextProps.toAnchor !== this.props.toAnchor) {
            this.toAnchor = this.parseAnchor(this.props.toAnchor);
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

    parseAnchorPercent(value) {
        const percent = parseFloat(value) / 100;
        if (isNaN(percent) || !isFinite(percent)) {
            throw new Error('LinkTo could not parse percent value');
        }
        return percent;
    }

    parseAnchorValue(value) {
        switch (value) {
            case 'top':
            case 'left':
                return 0;
            case 'middle':
            case 'center':
                return 0.5;
            case 'bottom':
            case 'right':
                return 1;
        }
        return this.parseAnchorPercent(value);
    }

    parseAnchor(value) {
        const parts = value.split(' ');
        if (parts.length !== 2) {
            throw new Error('LinkTo anchor format is "<y> <x>"');
        }
        return {
            x: this.parseAnchorValue(parts[1]),
            y: this.parseAnchorValue(parts[0]),
        };
    }

    findElement(className) {
        return document.getElementsByClassName(className)[0];
    }

    getElementOffset(el) {
        let top = -window.pageYOffset;
        let left = -window.pageXOffset;
        let parentEl = el.offsetParent;

        while (parentEl) {
            if (parentEl === document.body) {
                break;
            }

            top += parentEl.offsetTop +
                   parentEl.clientTop;

            left += parentEl.offsetLeft +
                    parentEl.clientLeft;

            parentEl = parentEl.offsetParent;
        }

        return  { top, left };
    }

    detect() {
        const { from, to } = this.props;

        const a = this.findElement(from);
        const b = this.findElement(to);

        if (!a || !b) {
            return false;
        }

        const box0 = a.getBoundingClientRect();
        const box1 = b.getBoundingClientRect();

        const anchor0 = this.fromAnchor;
        const anchor1 = this.toAnchor;

        const offset0 = this.getElementOffset(a);
        const offset1 = this.getElementOffset(b);

        const x0 = box0.left + box0.width * anchor0.x - offset0.left;
        const x1 = box1.left + box1.width * anchor1.x - offset1.left;
        const y0 = box0.top + box0.height * anchor0.y - offset0.top;
        const y1 = box1.top + box1.height * anchor1.y - offset1.top;

        return { x0, y0, x1, y1 };
    }

    render() {
        const points = this.detect();
        if (!points) {
            return null;
        }
        const { x0, y0, x1, y1 } = points;

        const dy = y1 - y0;
        const dx = x1 - x0;

        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        const length = Math.sqrt(dx * dx + dy * dy);

        const style = {
            position: 'absolute',
            top: `${y0}px`,
            left: `${x0}px`,
            width: `${length}px`,
            height: '1px',
            borderTop: this.props.border || '1px solid #f00',
            zIndex: this.props.zIndex || '1',
            transform: `rotate(${angle}deg)`,
            // Rotate around (x0, y0)
            transformOrigin: '0 0',
        };

        const props = {
            className: this.props.className,
            style: style,
        }

        return (
            <div {...props}></div>
        );
    }
}

LineTo.propTypes = {
    from: PropTypes.string.isRequired,
    fromAnchor: PropTypes.string,
    to: PropTypes.string.isRequired,
    toAnchor: PropTypes.string,
    className: PropTypes.string,
    border: PropTypes.string,
    zIndex: PropTypes.number,
};
