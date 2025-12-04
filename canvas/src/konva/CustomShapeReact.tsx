import { Layer, Shape, Stage } from "react-konva";

// 4-1. https://konvajs.org/docs/shapes/Custom.html

/**
 * sceneFunc
 * - 모양(shpae)의 시각적 형태을 정의합니다.
 *  */
/**
 * hitFunc
 * - 이벤트에 대한 사용자 정의 히트 영역을 정의하는 옵셔널 함수 (히트 감지에 사용되는 영역 지정)
 * - 활용 예시
 *   - 사용자가 도형과 더 쉽게 상호작용할 수 있도록 히트 영역을 더 크게 만든다.
 *   - 도형의 일부 영역은 감지 가능하게 하고, 다른 영역은 감지하지 못하게 한다.
 *   - 렌더링 성능을 향상시키기 위해 히트 드로우 함수를 단순화한ㄷ.
 *  */

const CustomShapeReact = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(20, 50);
            context.lineTo(220, 80);
            context.lineTo(100, 150);
            context.closePath();
            // 속성에서 모양을 채우고 획을 긋는 중요한 콘바 방법
            // 스트로크와 필링처럼
            context.fillStrokeShape(shape);
          }}
          fill="#00D2FF"
          stroke="black"
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

export default CustomShapeReact;
