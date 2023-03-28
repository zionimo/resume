import React, { useRef, useEffect } from "react";

import marioIMG from "../img/mariostand.png";
import marioJumpIMG from "../img/mariojump.png";
import goombaIMG from "../img/goomba.png";
import floorIMG from "../img/brick.png";


const Game = () => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const goombaArr = useRef([]);
  const floorArr = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 캔버스 너비,높이 지정
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 이미지 객체 생성
    const marioImage = new Image();
    marioImage.src = marioIMG;

    const marioJumpImage = new Image();
    marioJumpImage.src = marioJumpIMG;

    const goombaImage = new Image();
    goombaImage.src = goombaIMG;

    const floorImage = new Image();
    floorImage.src = floorIMG;

    // 러너 속성 설정
    var mario = {
      x: 300,
      y: 450,
      width: 50,
      height: 80,
      draw() {
        // 캐릭터 이미지
        // 점프 중일 때
        if (jump == true) {
          ctx.drawImage(
            marioJumpImage,
            this.x,
            this.y,
            this.width,
            this.height
          );
        }
        // 서 있을 때
        else {
          ctx.drawImage(marioImage, this.x, this.y, this.width, this.height);
        }
      },
    };

    // 장애물 속성 설정
    class Goomba {
      constructor() {
        this.x = 1600;
        this.y = 490;
        this.width = 40;
        this.height = 40;
      }
      draw() {
        // 캐릭터 이미지
        ctx.drawImage(goombaImage, this.x, this.y, this.width, this.height);
      }
    }

    // 프레임 계산용 타이머
    var timer = 0;
    // 점프 시작부터 시간 측정
    var jumpTimer = 0;

    // 1초마다 실행할 프레임 루프함수
    const loop = () => {
      requestRef.current = requestAnimationFrame(loop);
      timer++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 300프레임 마다 장애물을 배열에 생성
      if (timer % 350 === 0) {
        var goomba = new Goomba();
        goombaArr.current.push(goomba);
      }

      // 장애물이 화면에서 사라지면 (x<0) 배열에서 지우기
      goombaArr.current.forEach((a, i, o) => {
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
        mario.y -= 5;
        jumpTimer++;
      }
      // 점프한지 30프레임이 넘으면 점프 종료
      if (jumpTimer > 30) {
        jump = false;
        jumpTimer = 0;
      }
      // 점프가 종료되면 원위치로 돌아오기
      if (jump == false) {
        if (mario.y < 450) {
          mario.y += 5;
        }
      }

      mario.draw();
    };

    // 충돌 계산
    const crash = (mario, goomba) => {
      // x축 충돌 (장애물의 x위치 - (마리오 x위치 + 너비))
      var xGap = goomba.x - (mario.x + mario.width);
      // y축 충돌 (장애물의 y위치 - (마리오의 y위치 + 높이))
      var yGap = goomba.y - (mario.y + mario.height);
      // 각 축이 맞닿으면 캔버스의 모든 그림 지우고 애니메이션 중지
      if (xGap < -5 && yGap < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(requestRef.current);
      }
    };

    var jump = false;
    // 스페이스바 누르면 점프 true
    // 점프종료 상태일 때 & 마리오 위치가 원위치일 때만
    document.addEventListener("keydown", function (e) {
      if (e.code === "Space" && !jump && mario.y == 450) {
        jump = true;
      }
    });

    loop();
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: "innerWidth", height: "innerHeight" }}
      />
    </>
  );
};

export default Game;
