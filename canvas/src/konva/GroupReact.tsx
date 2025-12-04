import { Layer, Stage } from "react-konva";

// 5. https://konvajs.org/docs/shapes/Group.html
const Group = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Group x={50} y={50} draggable />
      </Layer>
    </Stage>
  );
};

export default Group;
