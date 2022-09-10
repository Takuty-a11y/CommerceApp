import { ComponentMeta } from "@storybook/react";
import BreadcrumbItem from "./index";

export default { title: "Atoms/BreadcrumbItem" } as ComponentMeta<
  typeof BreadcrumbItem
>;

export const Standard = () => (
  <div>
    <BreadcrumbItem><a>Item 1</a></BreadcrumbItem>
    <BreadcrumbItem>Item 2</BreadcrumbItem>
    <BreadcrumbItem>Item 3</BreadcrumbItem>
  </div>
);
