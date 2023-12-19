import Header from "../component/Header";

export default {
  title: "Component/Header",
  componenet: Header,
  argTypes: {
    level: { control: { type: "range", min: 1, max: 6 } },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    color: { control: "color" },
  },
};

export const Default = (args) => {
  return <Header {...args}>Header</Header>;
};
