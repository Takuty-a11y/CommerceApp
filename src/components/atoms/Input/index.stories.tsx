import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./index";

export default {
  title: "Atoms/Input",
  argTypes: {
    placeholder: {
      control: { type: "text" },
      // docsに表示する内容を設定
      description: "プレースホルダー",
      table: {
        type: { summary: "string" },
      },
    },
    hasBorder: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "ボーダーフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
    hasError: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "バリデーションフラグ",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// 通常テキスト
export const Normal = Template.bind({});
Normal.args = { hasError: false };

// エラー状態
export const Error = Template.bind({});
Error.args = { hasError: true };
