import Konva from "konva";
import { useEffect, useRef, useState } from "react";
import { Layer, Stage, Star, Text } from "react-konva";

// 4-2. https://konvajs.org/docs/events/Custom_Hit_Region.html
// https://konvajs.org/docs/shapes/Custom.html

/**
 * hitFunc
 * - 이벤트에 대한 사용자 정의 히트 영역을 정의하는 옵셔널 함수 (히트 감지에 사용되는 영역 지정)
 * - 활용 예시
 *   - 사용자가 도형과 더 쉽게 상호작용할 수 있도록 히트 영역을 더 크게 만든다.
 *   - 도형의 일부 영역은 감지 가능하게 하고, 다른 영역은 감지하지 못하게 한다.
 *   - 렌더링 성능을 향상시키기 위해 히트 드로우 함수를 단순화한ㄷ.
 *  */
const HitStrokeWidth = () => {
  const stageRef = useRef<Konva.Stage | null>(null);
  const [message, setMessage] = useState("");
  const [showHit, setShowHit] = useState(false);

  const handleStarEvent = (event: Konva.KonvaEventObject<Event>) => {
    setMessage(event.type + " star");
  };

  const handleLineEvent = (event: Konva.KonvaEventObject<Event>) => {
    setMessage(event.type + " line");
  };

  useEffect(() => {
    if (stageRef.current) {
      return;
    }

    /**
     * Konva가 Stage 렌더링할 때, 내부적으로 DOM구조를 만듭니다
     * <div class="konvajs-content">
     *  <canvas></canvas>
     *  <canvas></canvas>
     * </div>
     */
    // const stage = document.querySelector(".konvajs-content"); // 일치하는 선택자의 첫번째 Element 반환
    const stage = stageRef.current;
    if (!stage) {
      return;
    }

    if (showHit) {
      const hitCanvas = stage.querySelector("canvas:last-child");
      stage.style.border = "2px solid black";
      hitCanvas.style.position = "absolute";
      hitCanvas.style.top = "0";
      hitCanvas.style.left = "0";
    }
  }, [showHit]);

  return (
    <>
      <button onClick={() => setShowHit(!showHit)}>Toggle hit canvas</button>
      <Stage
        ref={stageRef} // stageRef.current가 null이 아닌 값을 갖을 수 있도록 함
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          <Text x={10} y={10} text={message} fontSize={24} />
          <Star
            x={window.innerWidth / 4}
            y={window.innerHeight / 2}
            numPoints={5}
            innerRadius={40}
            outerRadius={70}
            fill="red"
            stroke="black"
            strokeWidth={4}
            hitFunc={(context, shape) => {
              context.beginPath();
              context.arc(0, 0, 70, 0, Math.PI * 2, true);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
            onMouseOver={handleStarEvent}
            onMouseOut={handleStarEvent}
            onMouseDown={handleStarEvent}
            onMouseUp={handleStarEvent}
          />
        </Layer>
      </Stage>
    </>
  );
};

export default HitStrokeWidth;
