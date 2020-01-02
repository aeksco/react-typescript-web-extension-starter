import * as React from "react";
import "./styles.scss";

// // // //

export function Hello() {
    const [count, increment] = React.useReducer(i => i + 1, 0);

    return (
        <div className="row">
            <div className="col-lg-12 text-center">
                <p className="lead mb-0">Example Extension</p>
            </div>
        </div>
    );
}
