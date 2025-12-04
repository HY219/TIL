import { Arrow, Layer, Stage } from "react-konva";

// 2. https://konvajs.org/docs/shapes/Arrow.html
const ArrowReact = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Arrow
          x={window.innerWidth / 4}
          y={window.innerHeight / 4}
          points={[40, 30, 60, 90]} // 점 좌표의 평면 배열 [x1, y1, x2, y2, x3, y3]
          pointerLength={10} // Arrow pointer Length // Default value is 10
          pointerWidth={30} //  Arrow pointer width // Default value is 10
          fill="green"
          stroke="yellow"
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

export default ArrowReact;
