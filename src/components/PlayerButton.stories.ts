import PlayerButton from "./PlayerButton.svelte";

export default {
  title: "Components/PlayerButton",
  component: PlayerButton,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: PlayerButton,
  props: args,
  on: {
    click: onClick
  }
});

export const Story = Template.bind({});
Story.args = {
  color: "Red",
  selected: false,
};
