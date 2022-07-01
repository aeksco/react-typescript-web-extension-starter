// src/__mocks__/webextension-polyfill-ts
// Update this file to include any mocks for the `webextension-polyfill-ts` package
// This is used to mock these values for Storybook so you can develop your components
// outside the Web Extension environment provided by a compatible browser
// See .storybook/main.js to see how this module is swapped in for `webextension-polyfill-ts`
export const browser: any = {
    tabs: {
        executeScript(currentTabId: number, details: any) {
            return Promise.resolve({ done: true });
        },
        query(params: any): Promise<Tab[]> {
            return Promise.resolve([]);
        },
    },
    runtime: {
        sendMessage: (params: { popupMounted: boolean }) => {
            return;
        },
    },
};

interface Tab {
    id: number;
}

export interface Tabs {
    Tab: Tab;
}
