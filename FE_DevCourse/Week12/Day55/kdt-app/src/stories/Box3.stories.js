import Box3 from "../components/Box3";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// 어떤 컴포넌트인지 알린다음에, export한다.
export default {
  title: "Example/Box3",
  component: Box3,
  // 타입 지정
  argTypes: {
    // control - 플러그인 (storybook 설치 시 자동 설치) // Essential addons - 공식문서
    width: { control: "number" },
    height: { control: "number" },
    backgroundColor: { control: "color" },
  },
};

// create a "template" of how args map to rendering
const Template = (args) => <Box3 {...args} />;

// Each story then reuses that template
export const Default = Template.bind({});

// Default.args = {
//   primary: true,
//   label: "Box3",
// };
