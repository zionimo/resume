import { useEffect, useRef } from "react";

const Main = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight); // (0,0)위치의 좌표에 100x100사이즈 네모를 그려달라

    // 러너
    const mario = {
      x: 10,
      y: 200,
      width: 40,
      height: 50,
      draw() {
        // 러너 시각화
        ctx.fillStyle = "red";
        ctx.fillRect(mario.x, mario.y, mario.width, mario.height);
      },
    };
    mario.draw();

    // 장애물
    class Flower {
      constructor() {
        this.x = 500;
        this.y = 220;
        this.width = 20;
        this.height = 30;
      }
      draw() {
        // 장애물 시각화
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    var flower = new Flower();

    const timer = 0;
    const flowerArr = [];

    // 1초마다 실행할 프레임 루프
    const loop = () => {
      window.requestAnimationFrame(loop);
      // 새롭게 그려진 장애물 이전의 장애물들 지우기
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 120프레임마다 장애물을 하나씩 생성
      if (timer % 120 === 0) {
        var flower = new Flower();
        // 생선된 장애물을 배열에 추가하기
        flowerArr.push(flower);
      }

      // 배열에 있는 모든 것을 다 draw()하기
      flowerArr.forEach((a, i, o) => {
        // 데이터가 쌓이지 않게 장애물의 x좌표가 0미만이면 제거
        if (a.x < 0) {
          o.splice(i, 1);
        }
        // a.x--;
        a.draw();
      });
    };

    loop();

    // // 시각화
    // const draw = () => {
    //   // 러너 시각화
    //   ctx.fillStyle = "red";
    //   ctx.fillRect(mario.x, mario.y, mario.width, mario.height);

    //   // 장애물 시각화
    //   ctx.fillStyle = "black";
    //   ctx.fillRect(flower.x, flower.y, flower.width, flower.height);
    // };
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
