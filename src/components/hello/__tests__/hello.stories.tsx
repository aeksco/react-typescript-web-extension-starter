import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Hello } from "../component";
import { Story } from "@src/components/dev";

// // // //

storiesOf("Hello", module).add("example", () => {
    return (
        <Story>
            <Hello />
        </Story>
    );
});
