import PlayerSelect from "./PlayerSelect.svelte";

export default {
  title: "Compositions/PlayerSelect",
  component: PlayerSelect,
};

const Template = ({ onClick, ...args }) => ({
  Component: PlayerSelect,
  props: args,  
});

export const Story = Template.bind({});
Story.args = {
};
