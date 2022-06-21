import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";
import MainVideo from "./MainVideo";

const Main: FunctionComponent = () => {
  const { theme, langs, locale, local, changeTheme, playYoutubeVideo } =
    useContext(GlobalContext);

  return (
    <div
      css={styles.main}
      id="main"
      style={{
        background:
          "url(media/bg_" + theme + ".webp) no-repeat  center top /cover",
      }}
    >
      <div id="preload" className="hide">
        <img src="../media/bg_lightTheme.webp" />
        <img src="../media/bg_darkTheme.webp" />
      </div>

      <div className="max w1366 mobil_padding">
        <div className="langs">
          {langs?.length > 0 &&
            langs.map((item: any, index: number) => (
              <a key={index} href={"/" + item.code}>
                <img
                  className={
                    locale == item.code
                      ? "lang lang_active"
                      : "lang lang_inactive"
                  }
                  src={"../media/lang-" + item.code + ".webp"}
                  width={35}
                  height={35}
                  alt="Fishing"
                />
              </a>
            ))}
        </div>

        <div className="btn-themes">
          <button
            aria-label="Light Theme"
            style={theme != "lightTheme" ? { opacity: 0.5 } : {}}
            className="btn-lightTheme"
            onClick={() => changeTheme("lightTheme")}
          ></button>
          <button
            style={theme != "darkTheme" ? { opacity: 0.5 } : {}}
            className="btn-darkTheme"
            onClick={() => changeTheme("darkTheme")}
          ></button>
        </div>
      </div>
      <div className="video_con">
        <MainVideo />
      </div>
      <div className="slogan">{local.slogan}</div>
      <div className="test"></div>
      <figure className="slogan_2">
        <img
          width="100%"
          height="auto"
          src="/media/video_panel_slogan.webp"
          alt="Fishing Slogan"
        />
      </figure>
      <button
        className="btn-mobil-main-video"
        onClick={() => playYoutubeVideo()}
      >
        <span>Play Video</span>
      </button>
    </div>
  );
};

export default Main;

const styles = {
  main: css`
    position: relative;
    width: 100%;
    height: auto;
    transition: background 0.3s;
    overflow: hidden;
    background-position: top -40px left !important;
    @media only screen and (max-width: 1920px) {
      background-size: 105% auto !important;
      background-position: top 0px left !important;
    }
    @media only screen and (max-width: 1680px) {
      background-size: 110% auto !important;
      background-position: top 0px left !important;
    }
    @media only screen and (max-width: 1520px) {
      background-size: 120% auto !important;
      background-position: top -40px left !important;
    }

    @media only screen and (max-width: 1320px) {
      background-size: 150% auto !important;
      background-position: top -80px left 0 !important;
    }

    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 700px;
      overflow: hidden;
      background-size: 960px auto !important;
      background-position: top left -35px !important;
    }
    @media only screen and (max-width: 400px) {
      background-position: top left -45px !important;
    }
    @media only screen and (max-width: 380px) {
      background-position: top left -55px !important;
    }
    @media only screen and (max-width: 320px) {
      background-size: 640px auto !important;
      background-position: top left !important;
    }

    .btn-mobil-main-video {
      position: absolute;
      display: none;
      width: 100%;
      max-width: 200px;
      height: 90px;
      bottom: 163px;
      left: 50%;
      transform: translateX(-50%);
      align-items: center;
      justify-content: flex-end;
      background: rgba(166, 253, 253, 0.3);
      border-radius: 20px;
      font-size: 22px;
      color: var(--primaryColor);
      font-weight: 500;
      transition: 400ms;

      &:hover {
        background: var(--secondaryColor);
        background-repeat: no-repeat;
        background-position: left 15px center;
        color: var(--white);
      }
      @media only screen and (max-width: 480px) {
        display: block;
        max-width: 150px;
        height: 50px;
        font-size: 14px;
      }
      @media only screen and (max-width: 320px) {
        bottom: 312px;
      }
    }

    .video_con {
      @media only screen and (max-width: 480px) {
        display: none;
        pointer-events: none;
      }
    }
    .slogan {
      position: relative;
      width: 100%;
      max-width: 1200px;
      text-align: center;
      left: 50%;
      bottom: 0;
      color: var(--primaryColor);
      font-size: 21px;
      line-height: 32px;
      padding-bottom: 20px;
      margin-top: 28%;
      margin-bottom: 350px;
      transform: translateX(-50%);
      &:after {
        position: absolute;
        content: "";
        width: 200px;
        border-bottom: 2px solid var(--primaryColor);
        bottom: 0;
        left: 50%;
        padding-top: 20px;
        transform: translateX(-50%);
      }
      @media only screen and (max-width: 1920px) {
        margin-top: 32%;
      }
      @media only screen and (max-width: 1800px) {
        margin-top: 32%;
      }
      @media only screen and (max-width: 1680px) {
        margin-top: 35%;
      }
      @media only screen and (max-width: 1520px) {
        margin-top: 36%;
      }
      @media only screen and (max-width: 1320px) {
        margin-top: 15%;
      }
      @media only screen and (max-width: 1200px) {
        padding-left: 10px;
        padding-right: 10px;
      }
      @media only screen and (max-width: 480px) {
        display: none;
      }
    }

    .slogan_2 {
      display: none;
      pointer-events: none;
      @media only screen and (max-width: 480px) {
        position: absolute;
        display: block;
        bottom: 220px;
        padding: 0 30px;
      }
      @media only screen and (max-width: 320px) {
        position: absolute;
        display: block;
        bottom: 370px;
        padding: 0 30px;
      }
    }
    .langs {
      position: absolute;
      top: 35%;
      left: 20px;
      @media only screen and (max-width: 2222px) {
        top: 30%;
      }
      @media only screen and (max-width: 1320px) {
        top: 280px;
      }
      @media only screen and (max-width: 960px) {
        display: none;
      }
      a {
        .lang {
          margin-bottom: 10px;
          padding: 3px;
          cursor: pointer;
          transition: border opacity 0.3s;

          &.lang_active {
            border: 1px solid #957778;
            border-radius: 50%;
          }
          &.lang_inactive {
            opacity: 0.5;
            transition: opacity 0.3s;
          }
          @media only screen and (max-width: 480px) {
            display: none;
          }
        }
        &:hover {
          .lang {
            &.lang_inactive {
              opacity: 1;
            }
          }
        }
      }
    }
    .btn-themes {
      position: absolute;
      display: flex;
      flex-direction: column;
      top: 35%;
      right: 20px;
      @media only screen and (max-width: 2222px) {
        top: 30%;
      }
      @media only screen and (max-width: 1320px) {
        top: 280px;
      }
      @media only screen and (max-width: 800px) {
        top: 180px;
      }
      @media only screen and (max-width: 320px) {
        top: 120px;
      }
      .btn-lightTheme {
        margin-bottom: 10px;
        background: url(/media/icon-lightTheme.webp) center center no-repeat;

        &:hover {
          animation-name: rotateDarkBtn;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }
        @keyframes rotateDarkBtn {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(120deg);
          }
          50% {
            transform: rotate(120deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      }
      .btn-darkTheme {
        background: url(/media/icon-darkTheme.webp) center center no-repeat;
        &:hover {
          animation-name: rotateDarkBtn;
          animation-duration: 1s;
          animation-timing-function: ease-in-out;
        }
        @keyframes rotateDarkBtn {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(25deg);
          }
          50% {
            transform: rotate(25deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      }
      .btn-lightTheme,
      .btn-darkTheme {
        width: 40px;
        height: 40px;
        transform-origin: center;
        background-size: 30px auto;
        transition: 0.3s;
      }
    }
  `,
};
