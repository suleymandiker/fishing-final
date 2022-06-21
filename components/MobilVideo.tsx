import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

const MobilVideo: FunctionComponent = () => {
  const { playYoutubeVideo } = useContext(GlobalContext);

  return (
    <div css={styles.mobil_video}>
      <div
        id="mobil_video_con"
        className="mobil_video_con"
        style={{
          backgroundImage: "url(media/video_panel.webp)",
        }}
      >
        <div className="embed-container"></div>
        <button className="btn-mobil-video" onClick={() => playYoutubeVideo()}>
          <span>Play Video</span>
        </button>
        <figure>
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

export default MobilVideo;

const styles = {
  mobil_video: css`
    position: relative;
    figure {
      position: absolute;
      width: 100%;
      max-width: 500px;
      bottom: -25px;
      @media only screen and (max-width: 480px) {
        display: none;
      }
    }
    .embed-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;
    }
    .embed-container iframe,
    .embed-container object,
    .embed-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .mobil_video_con {
      position: relative;
      transform: translateX(120%) translateY(60%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 600px;
      height: auto;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      transition: 300ms;
      @media only screen and (max-width: 1400px) {
        transform: translateX(110%) translateY(60%);
      }
      @media only screen and (max-width: 1320px) {
        left: 50%;
        transform: translate(-50%, 50%);
      }
      @media only screen and (max-width: 1024px) {
        transform: translate(-50%, 240%);
      }
      @media only screen and (max-width: 480px) {
        left: auto;
        top: 0;
        transform: translateY(0px);
      }

      .btn-mobil-video {
        width: 100%;
        max-width: 200px;
        height: 90px;
        align-items: center;
        justify-content: flex-end;
        background: var(--primaryColor);
        border-radius: 20px;
        font-size: 18px;
        font-weight: 500;
        transition: 400ms;
        &:hover {
          background: var(--secondaryColor);
          background-repeat: no-repeat;
          background-position: left 15px center;
          color: var(--white);
        }
        @media only screen and (max-width: 480px) {
          max-width: 150px;
          height: 50px;
          font-size: 14px;
        }
      }
    }
    .player_con {
      display: block;
      align-items: none;
      justify-content: none;
      height: auto;
      border-radius: 22px;
      .btn-video {
        display: none;
      }
      figure {
        display: none;
      }
    }
  `,
};
