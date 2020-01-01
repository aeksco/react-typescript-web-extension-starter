import * as React from "react";
import { Hello } from "@src/components/hello";

// // // //

export function Popup() {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        chrome.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <div>
            <Hello />
        </div>
    );
}
