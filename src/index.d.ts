declare module 'react-lineto' {
    import { Component, PureComponent } from 'react';

    /**
     * Orientation type for 'Stepped' lines
     */
    type Orientation = 'h' | 'v';

    /**
     * Delay
     */
    type Delay = number | boolean;

    /**
     * Anchor type
     */
    type Anchor = string;

    /**
     * Coordinate type
     */
    type Coordinate = { x: number} | { y: number};

    /**
     * Coordinates type
     */
    type Coordinates = {
        x: number;
        y: number;
    };

    /**
     * Line coordinates
     */
    interface LineCoordinates {
        /**
         * First X coordinate
         */
        x0: number;
        /**
         * Second X coordinate
         */
        x1: number;
        /**
         * First Y coordinate
         */
        y0: number;
        /**
         * Second Y coordinate
         */
        y1: number;
    }

    /**
     * Base props for all components
     */
    interface BaseProps {
        /**
         * Border color, Example: #f00, red, etc.
         */
        borderColor?: string;
        /**
         * Border style, Example: solid, dashed, etc.
         */
        borderStyle?: string;
        /**
         * Border width (px)
         */
        borderWidth?: number;
        /**
         * Desired CSS className for the rendered element
         */
        className?: string;
        /**
         * Z-index offset
         */
        zIndex?: number;
        /**
         * CSS class name of the desired container
         */
        within?: string;
    }

    /**
     * Common props for 'LineTo' and 'SteppedLineTo' components
     */
    interface LineToCommonProps extends BaseProps {
        /**
         * Force render after delay (ms)
         */
        delay?: Delay;
        /**
         * Anchor for starting point (Format: "x y")
         */
        fromAnchor?: Anchor;
        /**
         * CSS class name of the first element
         */
        from: string;
        /**
         * Anchor for ending point (Format: 'x y")
         */
        toAnchor?: Anchor;
        /**
         * CSS class name of the second element
         */
        to: string;
    }

    /**
     * Common props for 'Line' and 'SteppedLine' components
     */
    interface LineCommonProps extends BaseProps, LineCoordinates {}

    /**
     * Props for 'Stepped' components
     */
    interface SteppedProps {
        /**
         * "h" for horizontal, "v" for vertical
         */
        orientation?: Orientation;
    }

    /**
     * Props of 'LineTo' component
     */
    export interface LineToProps extends LineToCommonProps {}

    /**
     * Props of 'SteppedLineTo' component
     */
    export interface SteppedLineToProps extends LineToProps, SteppedProps {}

    /**
     * Props of 'Line' component
     */
    export interface LineProps extends LineCommonProps {}

    /**
     * Props of 'SteppedLine' component
     */
    export interface SteppedLineProps extends LineProps, SteppedProps {}

    /**
     * Draw line between two DOM elements.
     */
    export default class LineTo<P extends LineToProps = LineToProps> extends Component<Extract<P, LineToProps>> {
        /**
         * Forced update after delay (MS)
         */
        deferUpdate: (delay: number) => void;

        /**
         * Parse delay prop
         */
        parseDelay: (delay?: Delay) => number;

        /**
         * Parse anchor given as percentage
         */
        parseAnchorPercent: (value: string) => number;

        /**
         * Parse anchor given as text
         */
        parseAnchorText: (value: string) => Coordinate;

        /**
         * Parse anchor prop
         */
        parseAnchor: (value?: Anchor) => Coordinates;

        /**
         * Detect coordinates
         */
        detect: () => LineCoordinates;

        /**
         * Find element by class
         */
        findElement: (className: string) => Element;
    }

    /**
     * Draw stepped line between two DOM elements.
     */
    export class SteppedLineTo extends LineTo<SteppedLineToProps> {}

    /**
     * Draw line using pixel coordinates (relative to viewport).
     */
    export class Line extends PureComponent<LineProps> {
        /**
         * Find element by class
         */
        findElement: (className: string) => Element;
    }

    /**
     * Draw stepped line using pixel coordinates (relative to viewport).
     */
    export class SteppedLine extends PureComponent<SteppedLineProps> {
        /**
         * Render vertically
         */
        renderVertical: () => React.ReactNode;

        /**
         * Render horizontally
         */
        renderHorizontal: () => React.ReactNode;
    }
}
