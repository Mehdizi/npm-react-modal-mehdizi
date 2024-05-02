# TypeScript Components by Rupert

A simple react modal component

This repository was created as part of a guide to publishing TypeScript React components. You can read the guide over here: [Publishing TypeScript React components to NPM](https://fildon.hashnode.dev/publishing-typescript-react-components-to-npm)

## Getting Started

Install this package:

```shell
npm i npm-react-modal-mehdizi
```

Import the Modal component:

```js
import { Modal, useModal } from "npm-react-modal-mehdizi";
```
import the variable and the function to handle the modal into your component.

```js
const { isOpen, handleToggleModal } = useModal();
```

You can then render the `Modal` component like any other React component in JSX.
with the message props of your choice :

```jsx
<Modal
        message="Message of your choice !"
        isOpen={isOpen}
        handleCloseModal={handleToggleModal}
      />
```
Apply the handleToggleModal to the button of your choice on the onClick method

```jsx
<Button onClick={handleToggleModal}>Toggle modal here !<Button>
```