import * as React from "react";
import { Hello } from "@src/components/hello";
import { Scroller } from "@src/components/scroller";
import "./styles.scss";

// // // //

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        chrome.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div className="popup-container">
            <div className="container mx-4 my-4">
                <Hello />
                <hr />
                <Scroller />
            </div>
        </div>
    );
}
