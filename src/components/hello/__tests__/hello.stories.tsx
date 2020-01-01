import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Hello } from "../component";

// // // //
// TODO - abstract this into a separate component
// import "@src/scss/app.scss";
function Story(props: { children: React.ReactNode }) {
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">{props.children}</div>
            </div>
        </div>
    );
}

storiesOf("Hello", module).add("example", () => {
    return (
        <Story>
            <Hello />
        </Story>
    );
});
