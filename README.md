# TypeScript Components by Rupert

This repository was created as part of a guide to publishing TypeScript React components. You can read the guide over here: [Publishing TypeScript React components to NPM](https://fildon.hashnode.dev/publishing-typescript-react-components-to-npm)

## Getting Started

Install this package:

```shell
npm add my-react-modal-by-mehdizi
```

Import the Modal component:

```js
import { Modal } from "my-react-modal-by-mehdizi";
import { useModal } from "my-react-modal-by-mehdizi";
```
import the variable and the function to handle the modal into your component.
const { isOpen, handleToggleModal } = useModal();

You can then render the `Modal` component like any other React component in JSX.
with the message props of your choice :
<Modal
        message="Message of your choice !"
        isOpen={isOpen}
        handleCloseModal={handleToggleModal}
      />

Apply the handleToggleModal to the button of your choice on the onClick method