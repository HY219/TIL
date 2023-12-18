import Input2 from "../components/Input2";

export default {
  title: "Component/Input2",
  compotent: Input2,
  // 타입 지정
  argTypes: {
    onChange: { action: "onChange" },
  },
};

export const Default = (args) => {
  return <Input2 {...args} />;
};
