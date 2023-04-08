import { StoryFn, Meta } from "@storybook/react";
import { Title } from "ui/src/components/Title";

export default {
  title: "Example/Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
};
