import * as React from "react";
import { Scroller } from "../component";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";

it("component renders", () => {
    const tree: ReactTestRendererJSON | null = renderer
        .create(<Scroller />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
