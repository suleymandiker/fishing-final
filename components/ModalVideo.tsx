import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

const ModalVideo: FunctionComponent = () => {
  const { youtube_id, modalVideo, stopYoutubeVideo } =
    useContext(GlobalContext);

  return (
    <div
      css={styles.modal_video}
      className={modalVideo.isShow ? " modal_video" : "modal_video hide"}
    >
      <div
        className="back"
        onClick={() => {
          stopYoutubeVideo();
        }}
      ></div>
      <div className="modal_video_inner">
        <div className="embed-container">
          <iframe
            id="YoutubePlayer"
            data-src={
              "https://www.youtube.com/embed/" + youtube_id + "?autoplay=1"
            }
            title="Fishing"
            allow="autoplay; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;

const styles = {
  modal_video: css`
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: 999999999;
    .back {
      position: absolute;
      inset: 0;
      margin: auto;
      background-color: rgba(0, 0, 0, 0.5);
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
    .modal_video_inner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
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
