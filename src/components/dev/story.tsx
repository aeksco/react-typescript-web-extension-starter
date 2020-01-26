import React, { FunctionComponent } from "react";
import "@src/scss/app.scss";

// // // //

interface StoryProps {
    children: React.ReactNode;
}

export const Story: FunctionComponent<StoryProps> = (props: StoryProps) => {
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">{props.children}</div>
            </div>
        </div>
    );
};
