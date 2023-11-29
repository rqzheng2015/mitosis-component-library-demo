# @example/solid-demo

This is a demo project to show how to use Solid.js UI library built from mitosis componennts.

## Prerequisites

Run `pnpm install` to install the dependencies.

## Running commands

- Start the dev server

```shell
pnpm dev
```

## How to import components from Solid.js UI library

All components is exported from `mitosis-component-library/solid` package, you can import them from this package.

```jsx
import {Image} from 'mitosis-component-library/solid';

// This is a simple usage of Image component, 
export default function(props) {
    const {src} = props;
    return <Image src={src} />
}
```