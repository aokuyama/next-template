import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Title } from "ui/src/components/Title";

export default {
  title: "Example/Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
};
