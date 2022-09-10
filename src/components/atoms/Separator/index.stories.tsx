import { ComponentMeta, ComponentStory } from "@storybook/react";
import Separator from "./index";

export default {
  title: "Atoms/Separator",
} as ComponentMeta<typeof Separator>;

export const Normal = () => (
  <>
    <Separator>or</Separator>
    <Separator>and</Separator>
    <Separator />
  </>
);