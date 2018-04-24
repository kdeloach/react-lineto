# react-lineto

Draw a line between two elements in React.

[![Build Status](https://travis-ci.org/kdeloach/react-lineto.svg?branch=master)](https://travis-ci.org/kdeloach/react-lineto)

## Getting Started

```
yarn install
yarn run demo
```

Browse to [localhost:4567](http://localhost:4567).

## Demo

![Demo](https://github.com/kdeloach/react-lineto/raw/master/preview.png)

## Components

* [LineTo](#lineto)
* [SteppedLineTo](#steppedlineto)
* [Line](#line)

### LineTo

Draw line between two DOM elements.

#### Example

```
import LineTo from 'react-lineto';

function render() {
    return (
        <div>
            <div className="A">Element A</div>
            <div className="B">Element B</div>
            <LineTo from="A" to="B" />
        </div>
    );
}
```

#### Properties

| Name        | Type   | Description                                    | Example Values
| ----------- | ------ | ---------------------------------------------- | --------------
| borderColor | string | Border color                                   | `#f00`, `red`, etc.
| borderStyle | string | Border style                                   | `solid`, `dashed`, etc.
| borderWidth | number | Border width (px)                              |
| className   | string | Desired CSS className for the rendered element |
| delay       | number or bool | Force render after delay (ms)          | `0`, `1`, `100`, `true`
| fromAnchor  | string | Anchor for starting point (Format: "x y")      | `top right`, `bottom center`, `left`, `100% 0`
| from\*      | string | CSS class name of the first element            |
| toAnchor    | string | Anchor for ending point (Format: "x y")        | `top right`, `bottom center`, `left`, `100% 0`
| to\*        | string | CSS class name of the second element           |
| zIndex      | number | Z-index offset                                 |

\* Required

### SteppedLineTo

Draw stepped line between two DOM elements.

#### Example

```
import { SteppedLineTo } from 'react-lineto';

function render() {
    return (
        <div>
            <div className="A">Element A</div>
            <div className="B">Element B</div>
            <SteppedLineTo from="A" to="B" orientation="v" />
        </div>
    );
}
```

#### Properties

| Name        | Type   | Description                                    | Example Values
| ----------- | ------ | ---------------------------------------------- | --------------
| borderColor | string | Border color                                   | `#f00`, `red`, etc.
| borderStyle | string | Border style                                   | `solid`, `dashed`, etc.
| borderWidth | number | Border width (px)                              |
| className   | string | Desired CSS className for the rendered element |
| delay       | number or bool | Force render after delay (ms)          | `0`, `1`, `100`, `true`
| fromAnchor  | string | Anchor for starting point (Format: "x y")      | `top right`, `bottom center`, `left`, `100% 0`
| from\*      | string | CSS class name of the first element            |
| orientation | enum   | "h" for horizonal, "v" for vertical            | `h` or `v`
| toAnchor    | string | Anchor for ending point (Format: "x y")        | `top right`, `bottom center`, `left`, `100% 0`
| to\*        | string | CSS class name of the second element           |
| within      | string | CSS class name of the desired container        |
| zIndex      | number | Z-index offset                                 |

\* Required

### Line

Draw line using pixel coordinates (relative to viewport).

#### Example

```
import { Line } from 'react-lineto';

function render() {
    return (
        <Line x0={0} y0={0} x1={10} y1={10} />
    );
}
```

#### Properties

| Name        | Type   | Description                                    | Example Values
| ----------- | ------ | ---------------------------------------------- | --------------
| borderColor | string | Border color                                   | `#f00`, `red`, etc.
| borderStyle | string | Border style                                   | `solid`, `dashed`, etc.
| borderWidth | number | Border width (px)                              |
| className   | string | Desired CSS className for the rendered element |
| within      | string | CSS class name of the desired container        |
| x0\*        | number | First X coordinate                             |
| x1\*        | number | Second X coordinate                            |
| y0\*        | number | First Y coordinate                             |
| y1\*        | number | Second Y coordinate                            |
| zIndex      | number | Z-index offset                                 |

\* Required

## Release Checklist

1. Bump version in `package.json`
1. Update `CHANGELOG.md`
1. Run `yarn build` or `./scripts/update`
1. Create version commit (ex. "2.0.0")
1. Create matching tag (ex. "2.0.0")
1. Push `master` branch and tags to origin
1. Verify Travis CI published NPM package
