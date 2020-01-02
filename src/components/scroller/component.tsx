import * as React from "react";
import "./styles.scss";

// // // //

// Scripts to execute in current tab
const scrollToTopScript = `window.scroll(0,0)`;
const scrollToBottomScript = `window.scroll(0,9999999)`;

/**
 * Executes a string of Javascript on the current tab
 * @param code The string of code to execute on the current tab
 */
function executeScript(code: string) {
    // Query for the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any[]) => {
        // Pulls current tab from chrome.tabs.query response
        const currentTab: any | undefined = tabs[0];

        // Short circuits function execution is current tab isn't found
        if (!currentTab) {
            return;
        }

        // Executes the script in the current tab
        chrome.tabs.executeScript(
            currentTab.id,
            {
                code,
            },
            () => {
                console.log("Done Scrolling");
            },
        );
    });
}

// // // //

export function Scroller() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <button
                    className="btn btn-block btn-outline-dark"
                    onClick={() => executeScript(scrollToTopScript)}
                >
                    Scroll To Top
                </button>
                <button
                    className="btn btn-block btn-outline-dark"
                    onClick={() => executeScript(scrollToBottomScript)}
                >
                    Scroll To Bottom
                </button>
            </div>
        </div>
    );
}
