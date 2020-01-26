const path = require("path");
const webpack = require("webpack");
const SRC_PATH = path.join(__dirname, "../src");
const STORIES_PATH = path.join(__dirname, "../stories");
const merge = require("webpack-merge");
const common = require("../webpack.common.js");

//dont need stories path if you have your stories inside your //components folder
const updatedConfig = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
            {
                loader: require.resolve("awesome-typescript-loader"),
                options: {
                    configFileName: "./.storybook/tsconfig.json",
                },
            },
            { loader: require.resolve("react-docgen-typescript-loader") },
        ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};

module.exports = merge(
    {
        module: { ...common.module },
        resolve: { ...common.resolve },
    },
    updatedConfig,
    {
        mode: "development",
        devtool: "inline-source-map",
    },
    {
        plugins: [
            new webpack.NormalModuleReplacementPlugin(
                /webextension-polyfill-ts/,
                resource => {
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
        ],
    },
);
