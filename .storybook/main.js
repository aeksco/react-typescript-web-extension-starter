const webpack = require("webpack");
const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    // Enable the Storybook Interactions debugger
    // Docs: https://storybook.js.org/addons/@storybook/addon-interactions
    features: {
        interactionsDebugger: true,
    },
    // Configure Storybook to use Webpack@5.x
    // Docs: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5
    core: {
        builder: "webpack5",
    },
    webpackFinal: async (config) => {
        // Setup @src path resolution for TypeScript files
        config.resolve = {
            ...config.resolve,
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@src": path.resolve(__dirname, "../src/"),
            },
        };

        // Setup module replacement for mocked webextension-polyfill
        config.plugins = [
            ...config.plugins,
            new webpack.NormalModuleReplacementPlugin(
                /webextension-polyfill/,
                (resource) => {
                    // Gets absolute path to mock `webextension-polyfill-ts` package
                    // NOTE: this is required beacuse the `webextension-polyfill-ts`
                    // package can't be used outside the environment provided by web extensions
                    const absRootMockPath = path.resolve(
                        __dirname,
                        "../src/__mocks__/webextension-polyfill.ts",
                    );

                    // Gets relative path from requesting module to our mocked module
                    const relativePath = path.relative(
                        resource.context,
                        absRootMockPath,
                    );

                    // Updates the `resource.request` to reference our mocked module instead of the real one
                    switch (process.platform) {
                        case "win32": {
                            resource.request = "./" + relativePath;
                            break;
                        }
                        default: {
                            resource.request = relativePath;
                            break;
                        }
                    }
                },
            ),
        ];

        // Remove the default .css webpack module rule
        // This is necessary because we use both global CSS and CSS modules
        // in the extension and in Storybook
        config.module.rules = config.module.rules.filter((r) => {
            if (".css".match(r.test)) {
                return false;
            }
            return true
        })

        // Treat src/css/app.css as a global stylesheet
        config.module.rules.push({
            test: /\app.css$/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader",
            ],
        })

        // Load .module.css files as CSS modules
        config.module.rules.push({
            test: /\.module.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                    },
                },
                "postcss-loader",
            ],
        })

        // Return the final Webpack configuration
        return config;
    },
};
