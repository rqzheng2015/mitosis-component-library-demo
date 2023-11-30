# mitosis-component-library-demo

This is a demo project to show how to use `mitosis` to build up a ui library.

By using mitosis, we could write JSX in mitosis, and transformed it to other framework source code, such as Vue, React, Solid, etc.

## Prerequisites

Run `pnpm install` to install the dependencies.

## Running commands

- Generate the transformed source code of mitosis JSX, such as React, Vue, Solid, etc.

```shell
pnpm generate:source
```

After running this command, you will see the generated source code in `packages/mitosis-components/dist/<framework>/src` directory.

- Generate the bundle of transformed source code in specified framework, such as React, Vue, Solid, etc.

```shell
# bundle all supported framework bundles (Need to generate source code first)
pnpm bundle:all
```

After running this command, you will see the generated bundle in `packages/mitosis-components/dist/<framework>/dist` directory.

## How to use

First, you need to install the `mitosis-component-library` package to your working projects based on specified framework, such as React, Vue, Solid, etc.

```shell
pnpm add mitosis-component-library
```

### React

```jsx
// import components from react component library
import {Image} from 'mitosis-component-library/react';

// This is a simple usage of Image component, 
export default function(props) {
    const {src} = props;
    return <Image src={src} />
}
```

### Solid

```jsx
// import components from solid component library
import {Image} from 'mitosis-component-library/solid';

// This is a simple usage of Image component, 
export default function(props) {
    const {src} = props;
    return <Image src={src} />
}
```