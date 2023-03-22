import { useEffect, useRef } from "react";

const Main = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight); // (0,0)위치의 좌표에 100x100사이즈 네모를 그려달라

    // 러너
    var mario = {
      x: 10,
      y: 200,
      width: 40,
      height: 50,
    };

    // 장애물
    const flower = {
      x: 500,
      y: 225,
      width: 20,
      height: 30,
    };

    const draw = () => {
      ctx.fillStyle = "red";
      ctx.fillRect(mario.x, mario.y, mario.width, mario.height);

      ctx.fillStyle = "black";
      ctx.fillRect(flower.x, flower.y, flower.width, flower.height);
    };
    const loop = () => {
      draw();
    };

    window.requestAnimationFrame(loop);
  });

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
    </div>
  );
};

export default Main;
