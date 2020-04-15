import {
    addParameters,
    addDecorator,
    INITIAL_VIEWPORTS,
} from "@storybook/react";
import { withConsole, setConsoleOptions } from "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";

// Configure Viewports addon
addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: "someDefault",
    },
});

// You'll start to receive all console messages, warnings, errors in your action logger panel - Everything except HMR logs.
setConsoleOptions({
    panelExclude: [],
});

// Setup StoryInfo addon
addDecorator(withInfo);

// You'll receive console outputs as a console,
// warn and error actions in the panel. You might want to know from
// what stories they come. In this case, add withConsole decorator:
addDecorator((storyFn, context) => withConsole()(storyFn)(context));