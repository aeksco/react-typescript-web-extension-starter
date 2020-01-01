import * as React from "react";
import "./styles.scss";

export function Hello() {
    const [count, increment] = React.useReducer(i => i + 1, 0);

    return (
        <div className="row">
            <div className="col-lg-12">
                <button
                    className="btn btn-block btn-outline-success"
                    onClick={increment}
                >
                    Clicked {count} times
                </button>
            </div>
        </div>
    );
}
