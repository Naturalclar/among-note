import Button from "./Button.svelte";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: onClick
  }
});

export const Story = Template.bind({});
Story.args = {
  label: "Button",
};
