import Text from "../component/Text";

export default {
  title: "Component/Text",
  componenet: Text,
  argTypes: {
    size: { control: "number" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    delete: { control: "boolean" },
    color: { control: "color" },
  },
};

export const Default = (args) => {
  return <Text {...args}>Text</Text>;
};
