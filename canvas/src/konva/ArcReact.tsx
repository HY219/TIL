import { Arc, Layer, Stage } from "react-konva";

// 1. https://konvajs.org/docs/shapes/Arc.html
const ArcReact = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Arc
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
          innerRadius={10} // 내부 원 반지름
          outerRadius={20} // 외부 원 반지름
          angle={60}
          fill="yellow" // (외부 원 영역 - 내부 원 영역) = 색칠되는 부분
          stroke="black"
          sstrokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

export default ArcReact;
