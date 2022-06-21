import React, { FunctionComponent } from "react";
import { css } from "@emotion/react";

const SlideImg: FunctionComponent = () => {
  const media = [
    { filename: "nft.webp" },
    { filename: "nft_cyan.webp" },
    { filename: "nft_neon.webp" },
    { filename: "nft_purple.webp" },
    { filename: "nft_green.webp" },
    { filename: "nft.webp" },
    { filename: "nft.webp" },
    { filename: "nft_purple.webp" },
    { filename: "nft.webp" },
    { filename: "nft_neon.webp" },
    { filename: "nft_green.webp" },
    { filename: "nft.webp" },
    { filename: "nft_purple.webp" },
  ];

  return (
    <div css={styles.slide_img}>
      <h2 className="title slide_img_title">
        10,000 <span>ALGORITHMICALLY GENERATED UNIQE NFT</span>
      </h2>
      <div className="slide_img_con">
        <div className="nft_con">
          {media?.length > 0 &&
            media.map((item: any, index: number) => (
              <figure key={index}>
                <img src={"../media/nft/" + item.filename} alt="Fishing" />
              </figure>
            ))}
          {media?.length > 0 &&
            media.map((item: any, index: number) => (
              <figure key={index}>
                <img src={"../media/nft/" + item.filename} alt="Fishing" />
              </figure>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SlideImg;

const styles = {
  slide_img: css`
    position: relative;
    width: auto;
    height: auto;
    overflow: hidden;
    top: -300px;
    @media only screen and (max-width: 480px) {
      top: -150px;
    }
    @media only screen and (max-width: 320px) {
      top: -310px;
    }
    .slide_img_con {
      .nft_con {
        display: inline-block;
        width: 100%;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        gap: 30px;
        animation-name: slideLinear;
        animation-duration: 60s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        &:hover {
          animation-play-state: paused;
        }
        @keyframes slideLinear {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        figure {
          position: relative;
          display: inline-block;
          width: 200px;
          height: 200px;
          margin-right: 20px;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
          @media only screen and (max-width: 480px) {
            width: 120px;
            height: 120px;
            img {
              border-radius: 10px;
            }
          }
        }
      }
    }
  `,
};
