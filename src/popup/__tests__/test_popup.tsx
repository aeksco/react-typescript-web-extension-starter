import * as React from "react";
import { Popup } from "../component";
import renderer from "react-test-renderer";

it("component renders", () => {
    const tree = renderer.create(<Popup />).toJSON();
    expect(tree).toMatchSnapshot();
});
