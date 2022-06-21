import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

const MainVideo: FunctionComponent = () => {
  const { playYoutubeVideo } = useContext(GlobalContext);

  const image_count = 7;
  const slideSpeed = 5; // saniye cinsinden.
  var timer: any;
  var imgNumber = 1;
  const [videoImg, setVideoImg] = useState(1);

  useEffect(() => {
    setInterval(() => {
      if (imgNumber == image_count + 1) {
        setVideoImg(1);
        imgNumber = 1;
      } else {
        setVideoImg(imgNumber);
        imgNumber = imgNumber + 1;
      }
    }, slideSpeed * 1000);
    clearInterval(timer);
  }, []);

  return (
    <div css={styles.main_video_}>
      <div id="video_con" className="video_con">
        <img className="video_frame" src={"media/video/video_panel.webp"} />
        <div
          className="video_img"
          onClick={() => playYoutubeVideo("video_con")}
          style={{
            backgroundImage: "url(media/video/video-img-" + videoImg + ".webp)",
          }}
        >
          <img src={"media/video/dark-effect.webp"} />
          <button className="btn-video">
            <span>Play Video</span>
          </button>
        </div>
        <figure className="video_slogan">
          <img
            width="100%"
            height="auto"
            src="/media/video_panel_slogan.webp"
            alt="Fishing Slogan"
          />
        </figure>
      </div>
    </div>
  );
};

export default MainVideo;

const styles = {
  main_video_: css`
    position: relative;
    width: 100vw;
    left: 0;
    top: 0;
    transform: translateY(85%);
    pointer-events: none;
    @media only screen and (min-width: 1920px) {
      top: 0;
      transform: translateY(65%);
    }
    @media only screen and (max-width: 1680px) {
      transform: translateY(100%);
    }
    @media only screen and (max-width: 1520px) {
      transform: translateY(110%);
    }

    @media only screen and (max-width: 1366px) {
      transform: translateY(85%);
    }
    @media only screen and (max-width: 1320px) {
      top: 0;
      transform: translateY(0);
      margin-top: 65%;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
      top: -10px;
      margin-top: 0;
      margin-bottom: 25px;
    }
    .video_con {
      position: relative;
      transform: translateX(-120%);
      width: 40%;
      height: auto;
      margin-left: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      transition: 300ms;
      pointer-events: auto;
      @media only screen and (max-width: 1320px) {
        width: 60%;
        margin-left: 50%;
        transform: translateX(-50%);
      }
      @media only screen and (max-width: 850px) {
        width: 80%;
        margin-left: 50%;
        transform: translateX(-50%);
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
        max-width: 350px;
        margin: 0 auto;
        transform: translateX(0);
      }
      .video_slogan {
        position: absolute;
        width: 100%;
        padding: 0 40px;
        padding-top: 15px;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
        @media only screen and (max-width: 480px) {
          display: none;
        }
      }
      .video_frame {
        position: relative;
        right: 0;
      }
      .video_img {
        position: absolute;
        width: 100%;
        max-width: 99%;
        height: 100%;
        top: 0;
        bottom: 0;
        transform: translate(0.6%, 7.8%);
        background-size: 100% auto;
        background-repeat: no-repeat;
        transition: 0.4s;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          .btn-video {
            &:after {
              animation-name: zoomEffect;
              animation-duration: 0.5s;
              animation-timing-function: ease-in-out;
            }
            @keyframes zoomEffect {
              0% {
                transform: translateY(-50%) scale(1);
              }
              25% {
                transform: translateY(-50%) scale(1.2) rotate(5deg);
              }
              50% {
                transform: translateY(-50%) scale(1.2) rotate(-5deg);
              }
              100% {
                transform: translateY(-50%) scale(1) rotate(0deg);
              }
            }
          }
        }

        .btn-video {
          position: absolute;
          width: 100%;
          top: 0;
          right: 0;
          max-width: 200px;
          height: 40px;
          align-items: center;
          justify-content: flex-end;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 0 220px 0 220px;
          font-size: 16px;
          line-height: 47px;
          font-weight: 500;
          transition: 0.3s;
          transform: scale(1);
          color: var(--white);
          text-transform: uppercase;
          z-index: 9;

          &:after {
            position: absolute;
            content: "";
            background-color: white;
            clip-path: polygon(0 0, 0 100%, 90% 50%);
            width: 25px;
            height: 25px;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
          }

          @media only screen and (max-width: 480px) {
            max-width: 150px;
            height: 40px;
            font-size: 14px;
            border-radius: 0px 20px 0px 20px;
            &:after {
              width: 18px;
              height: 18px;
              right: 10px;
            }
          }
        }
      }
    }
  `,
};
