import LoginForm from "../components/LoginForm";

export default {
  title: "Component/LoginForm",
  componenet: LoginForm,
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
