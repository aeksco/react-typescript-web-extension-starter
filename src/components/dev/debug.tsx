import * as React from "react";

export function Debug(props: { data: any }) {
    const [shown, setShown] = React.useState(false);

    return (
        <div className="row">
            <div className="col-lg-12">
                <button
                    className="btn btn-block btn-outline-success"
                    onClick={() => setShown(!shown)}
                >
                    Toggle JSON
                </button>
            </div>
            <div className="col-lg-12">
                <pre className="px-2 py-2 bg-dark text-light">
                    {JSON.stringify(props.data, null, 4)}
                </pre>
            </div>
        </div>
    );
}
