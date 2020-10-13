const webpack = require("webpack");
const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: [
        "@storybook/addon-actions/register",
        "@storybook/addon-viewport/register",
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            exclude: /node_modules/,
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader", // Creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // Translates CSS into CommonJS
                },
                {
                    loader: "sass-loader", // Compiles Sass to CSS
                },
            ],
        });

        config.resolve = {
            ...config.resolve,
            extensions: [".ts", ".tsx", ".js"],
            alias: {
                "@src": path.resolve(__dirname, "../src/"),
            },
        };

        config.plugins = [
            ...config.plugins,
            new webpack.NormalModuleReplacementPlugin(
                /webextension-polyfill-ts/,
                (resource) => {
                    // Gets absolute path to mock `webextension-polyfill-ts` package
                    // NOTE: this is required beacuse the `webextension-polyfill-ts`
                    // package can't be used outside the environment provided by web extensions
                    const absRootMockPath = path.resolve(
                        __dirname,
                        "../src/__mocks__/webextension-polyfill-ts.ts",
                    );

                    // Gets relative path from requesting module to our mocked module
                    const relativePath = path.relative(
                        resource.context,
                        absRootMockPath,
                    );

                    // Updates the `resource.request` to reference our mocked module instead of the real one
                    resource.request = relativePath;
                },
            ),
        ];

        return config;
    },
};
