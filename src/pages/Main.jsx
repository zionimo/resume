import React, { useRef, useEffect } from "react";

const Main = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const flowerArr = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 캔버스 너비,높이 지정
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 러너 설정
    var mario = {
      x: 10,
      y: 200,
      width: 50,
      height: 70,
      draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      },
    };

    // 장애물 설정
    class Flower {
      constructor() {
        this.x = 500;
        this.y = 220;
        this.width = 30;
        this.height = 50;
      }
      draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    }
    
    // 프레임 계산용 타이머
    var timer = 0;
    // 점프 시작부터 시간 측정
    var jumpTimer = 0;

    // 1초마다 실행할 프레임 루프
    const loop = () => {
      requestRef.current = requestAnimationFrame(loop);
      timer++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 300프레임 마다 장애물 배열에 생성
      if (timer % 300 === 0) {
        var flower = new Flower();
        flowerArr.current.push(flower);
      }

      // 장애물이 화면에서 사라지면 (x<0) 배열에서 지우기
      flowerArr.current.forEach((a, i, o) => {
        if (a.x < 0) {
          o.splice(i, 1);
        } else {
          // 장애물 속도 지정
          a.x -= 2.5;
          crash(mario, a);
          a.draw();
        }
      });

      // 러너 점프 동작
      if (jump == true) {
        mario.y -= 4;
        jumpTimer++;
      }
      // 점프가 종료되면 원위치로 돌아오기
      else if (mario.y < 200) {
        mario.y += 4;
      }
      // 점프한지 30프레임이 넘으면 점프 중단
      if (jumpTimer > 30) {
        jump = false;
        jumpTimer = 0;
      }

      mario.draw();
    };

    // 충돌 계산
    function crash(mario, flower) {
      // x축 충돌 (장애물의 x위치 - (마리오 x위치 + 너비))
      var xGap = flower.x - (mario.x + mario.width);
      // y축 충돌 (장애물의 y위치 - (마리오의 y위치 + 높이))
      var yGap = flower.y - (mario.y + mario.height);
      // 각 축이 맞닿으면 애니메이션 정지
      if (xGap < 0 && yGap < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(requestRef.current);
      }
    }

    var jump = false;
    // 스페이스바 누르면 점프 true
    document.addEventListener("keydown", function (e) {
      if (e.code === "Space") {
        jump = true;
      }
    });

    loop();
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Main;
