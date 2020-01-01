const path = require("path");
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
    }
);
