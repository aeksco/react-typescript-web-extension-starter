import * as React from "react";
import "@src/scss/app.scss";

// // // //

export function Story(props: { children: React.ReactNode }) {
    return (
        <div className="container mt-4">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">{props.children}</div>
            </div>
        </div>
    );
}
