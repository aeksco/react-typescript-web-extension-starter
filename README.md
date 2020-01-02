# react-typescript-chrome-extension-starter

:desktop_computer: A Chrome Extension starter kit built with React, TypeScript, SCSS, Storybook, EsLint, Jest, Bootstrap, &amp; Webpack.

![Example Extension Popup](https://i.imgur.com/Wp37usG.png "Example Extension Popup")

**Getting Started**

1. Run the following commands to install dependencies and

```
yarn install
yarn dev
```

2. Open up [chrome://extensions](chrome://extensions) in your browser. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension](https://i.imgur.com/ORuHbDR.png "Installed Extension")

**Scripts**

-   `yarn dev` - run `webpack` in `watch` mode
-   `yarn storybook` - runs the Storybook server
-   `yarn build` - builds the production-ready unpacked extension
-   `yarn test -u` - runs Jest + updates test snapshots
-   `yarn lint` - runs EsLint
-   `yarn prettify` - runs Prettier

**Notes**

-   Includes ESLint configured to work with TypeScript and Prettier.

-   Includes tests with Jest - note that the `babel.config.js` and associated dependencies are only necessary for Jest to work with TypeScript.

-   Recommended to use `Visual Studio Code` with the `Format on Save` setting turned on.

-   Example icons courtesy of [FontAwesome](https://fontawesome.com).

-   Includes Storybook configured to work with React + TypeScript. Note that it maintains its own `webpack.config.js` and `tsconfig.json` files. See example story in `src/components/hello/__tests__/hello.stories.tsx`

![Example Storybook Setup](https://i.imgur.com/ER0WHtY.png "Example Storybook Setup")

**Built with**

-   [React](https://reactjs.org)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Storybook](https://storybook.js.org/)
-   [Jest](https://jestjs.io)
-   [Eslint](https://eslint.org/)
-   [Webpack](https://webpack.js.org/)
-   [Babel](https://babeljs.io/)
-   [Bootstrap](https://getbootstrap.com)
-   [SCSS](https://sass-lang.com/)

**Misc. References**

-   [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
-   https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb

**ToDos**

-   Build out `README.md`
    -   Description of tech used
    -   Document directory structure
-   Add icons for tech used
-   ~~Add screenshots of Storybook~~
-   ~~Add screenshots of example extension~~
-   ~~Add links to Chrome Extension dev docs~~
-   ~~Add component with JS script injection example~~
-   ~~Add `EsLint`~~
-   ~~Add Bootstrap + SCSS~~
-   ~~Add `Storybook` for more controlled component development~~
-   ~~Add `SCSS` support~~
-   ~~Add `manifest.json`~~
-   ~~Add `popup.html`~~
-   ~~Add `popup` React component~~
-   ~~Add `Jest` + snapshot tests~~
-   ~~Add example icons~~
