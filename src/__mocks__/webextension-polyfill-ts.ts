// src/__mocks__/webextension-polyfill-ts
// Update this file to include any mocks for the `webextension-polyfill-ts` package
// This is used to mock these values for Storybook so you can develop your components
// outside the Web Extension environment provided by a compatible browser
export const browser: any = {
    tabs: {
        executeScript(currentTabId: number, details: any) {
            return Promise.resolve({ done: true });
        },
    },
};

export interface Tabs {
    Tab: {
        id: number;
    };
}
