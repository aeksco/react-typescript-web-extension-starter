# react-typescript-web-extension-starter

:desktop_computer: A Web Extension starter kit built with React, TypeScript, SCSS, Storybook, EsLint, Jest, Bootstrap, &amp; Webpack. Compatible with both Google Chrome + Mozilla Firefox.

![Example Extension Popup](https://i.imgur.com/Wp37usG.png "Example Extension Popup")

**Getting Started**

Run the following commands to install dependencies and start developing

```
yarn install
yarn dev
```

**Scripts**

-   `yarn dev` - run `webpack` in `watch` mode
-   `yarn storybook` - runs the Storybook server
-   `yarn build` - builds the production-ready unpacked extension
-   `yarn test -u` - runs Jest + updates test snapshots
-   `yarn lint` - runs EsLint
-   `yarn prettify` - runs Prettier

**Loading the extension in Google Chrome**

In [Google Chrome](https://www.google.com/chrome/), open up [chrome://extensions](chrome://extensions) in your browser. Make sure the `Developer Mode` checkbox in the upper-right corner is turned on. Click `Load unpacked` and select the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Google Chrome](https://i.imgur.com/ORuHbDR.png "Installed Extension in Google Chrome")

**Loading the extension in Mozilla Firefox**

In [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/), open up the [about:debugging](about:debugging) page in your browser. Click the `Load Temporary Add-on...` button and select the `manfiest.json` from the `dist` directory in this repository - your extension should now be loaded.

![Installed Extension in Mozilla Firefox](https://i.imgur.com/gO2Lrb5.png "Installed Extension in Mozilla Firefox")

**Notes**

-   Includes ESLint configured to work with TypeScript and Prettier.

-   Includes tests with Jest - note that the `babel.config.js` and associated dependencies are only necessary for Jest to work with TypeScript.

-   Recommended to use `Visual Studio Code` with the `Format on Save` setting turned on.

-   Example icons courtesy of [FontAwesome](https://fontawesome.com).

-   [Microsoft Edge]() is not currently supported.

-   Includes Storybook configured to work with React + TypeScript. Note that it maintains its own `webpack.config.js` and `tsconfig.json` files. See example story in `src/components/hello/__tests__/hello.stories.tsx`

-   Includes a custom mock for the [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts) package in `src/__mocks__`. This allows you to mock any browser APIs used by your extension so you can develop your components inside Storybook.

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
-   [webextension-polyfill-ts](https://github.com/Lusito/webextension-polyfill-ts)

**Misc. References**

-   [Chrome Extension Developer Guide](https://developer.chrome.com/extensions/devguide)
-   [Firefox Extension Developer Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
-   [Eslint + Prettier + Typescript Guide](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)

**ToDos**

-   Build out `README.md`
    -   Description of tech used
    -   Document directory structure
    -   Add icons for tech used
    -   https://cdn.svgporn.com/logos/jest.svg
    -   https://cdn.svgporn.com/logos/react.svg
    -   https://cdn.svgporn.com/logos/chrome.svg
    -   https://cdn.svgporn.com/logos/firefox.svg
    -   https://cdn.svgporn.com/logos/storybook.svg
    -   https://cdn.svgporn.com/logos/storybook-icon.svg
    -   https://cdn.svgporn.com/logos/typescript-icon.svg
    -   https://cdn.svgporn.com/logos/typescript.svg
    -   https://cdn.svgporn.com/logos/eslint.svg
    -   https://cdn.svgporn.com/logos/webpack.svg
    -   https://cdn.svgporn.com/logos/bootstrap.svg
