import * as React from "react";
import { Hello } from "../component";
import { ComponentMeta } from "@storybook/react";

// // // //

export default {
    title: "Components/Hello",
    component: Hello,
} as ComponentMeta<typeof Hello>;

export const Render = () => <Hello />;
