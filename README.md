# react-lineto

Draw a line between two elements in React.

[![Build Status](https://travis-ci.org/kdeloach/react-lineto.svg?branch=master)](https://travis-ci.org/kdeloach/react-lineto)

## Getting Started

```
yarn install
yarn run demo
```

Browse to [localhost:4567](http://localhost:4567).

## Example

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

## Properties

| Name       | Type   | Description                                    | Example Values
| ---------- | ------ | ---------------------------------------------- | --------------
| from\*     | string | CSS class name of the first element            |
| to\*       | string | CSS class name of the second element           |
| fromAnchor | string | Anchor for starting point (Format: "x y")      | `top right`, `bottom center`, `100% 0`
| toAnchor   | string | Anchor for ending point (Format: "x y")        | `top right`, `bottom center`, `100% 0`
| delay      | number | Force render after delay (ms)                  |
| className  | string | Desired CSS className for the rendered element |
| border     | string | Line decoration (CSS border property syntax)   | `1px solid #000`
| zIndex     | number | Z-index offset                                 |

\* Required
