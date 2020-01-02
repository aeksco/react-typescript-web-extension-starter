import * as React from "react";
import "./styles.scss";

// // // //

// Scripts to execute in current tab
const toggleAllScript = `document.querySelectorAll(".js-details-target").forEach(c => { c.click(); });`;
const closeAllScript = `document.querySelectorAll(".js-details-target[aria-expanded='true']").forEach(c => { c.click(); });`;
const openAllScript = `document.querySelectorAll(".js-details-target[aria-expanded='false']").forEach(c => { c.click(); });`;

/**
 * Executes a string of Javascript on the current tab
 * @param code The string of code to execute on the current tab
 */
function executeScript(code: string) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any[]) => {
        const currentTab: any | undefined = tabs[0];
        if (!currentTab) {
            return;
        }

        chrome.tabs.executeScript(
            currentTab.id,
            {
                code,
            },
            () => {
                console.log("DONE");
            },
        );
    });
}

// // // //

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
                <button
                    className="btn btn-block btn-outline-success"
                    onClick={() => executeScript(openAllScript)}
                >
                    Open All
                </button>
                <button
                    className="btn btn-block btn-outline-success"
                    onClick={() => executeScript(closeAllScript)}
                >
                    Close All
                </button>
                <button
                    className="btn btn-block btn-outline-success"
                    onClick={() => executeScript(toggleAllScript)}
                >
                    Toggle All
                </button>
            </div>
        </div>
    );
}
