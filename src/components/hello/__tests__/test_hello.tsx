import * as React from "react";
import { Hello } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
    const tree: ReactTestRendererJSON | null = renderer
        .create(<Hello />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
