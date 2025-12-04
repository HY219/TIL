import { Stage, Layer, Circle } from "react-konva";

// 3-2. https://konvajs.org/docs/shapes/Circle.html
const CircleReact = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Circle
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
          radius={70}
          fill="red"
          stroke="black"
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

export default CircleReact;
