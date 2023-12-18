import Counter2 from "../components/Counter2";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// 어떤 컴포넌트인지 알린다음에, export한다.
export default {
  title: "Example/Counter2",
  component: Counter2,
  // 타입 지정
  argTypes: {
    // action - log 확인 플러그인
    onIncrease: { action: "clicked" }, //clicked: {name: "clicked", args: undefined}
  },
};

// create a "template" of how args map to rendering
const Template = (args) => <Counter2 {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});
