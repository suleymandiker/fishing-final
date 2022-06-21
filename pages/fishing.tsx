/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";
import { FunctionComponent, useContext } from "react";
import Claim from "../components/Fishing/Claim";
import ClaimYard from "../components/Fishing/ClaimYard";
import NftCon from "../components/Fishing/NftCon";
import StakeSwap from "../components/Fishing/StakeSwap";
import TotalTon from "../components/Fishing/TotalTon";
import TotalTonClaim from "../components/Fishing/TotalTonClaim";
import FooterTop from "../components/FooterTop";

import SeoHead from "../components/global/SeoHead";
import { GlobalContext } from "../context/GlobalContext";

const Fishing: FunctionComponent = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div
      css={styles.fishing}
      // style={{
      //   background:
      //     "url(media/bg_" + theme + ".webp) no-repeat  center top / cover",
      // }}
    >
      <SeoHead title={"Fishing - Fishing"} description={"NF Club"} />
      <div className="bg_pic">
        <figure className="left_pic">
          <img src={"../media/bg_" + theme + ".webp"} alt="Fishing" />
        </figure>
        <figure className="right_pic">
          <img src={"../media/bg_" + theme + ".webp"} alt="Fishing" />
        </figure>
      </div>

      <div className="mobil_padding fishing_parent m-bottom-40">
        <div className="fishing_con max w1200">
          <div className="frame_top"></div>
          <div className="fishing_con_inner">
            <div className="grid col-2 m-bottom-40 top_area">
              <TotalTon />
              <Claim />
            </div>
            <div className="top_area_mobil max w480">
              <TotalTonClaim />
            </div>
            <div className="bottom_area grid col-6-9 gap-20 m-bottom-40">
              <div className="left_column">
                <NftCon />
              </div>

              <div className="right_column">
                <StakeSwap />
                <ClaimYard />
              </div>
            </div>
          </div>

          <div className="frame_bottom"></div>
        </div>
      </div>
      <hr className="hr_line" />
      <FooterTop />
    </div>
  );
};

export default Fishing;

const styles = {
  fishing: css`
    position: relative;
    width: 100%;
    height: auto;
    transition: background 0.3s;
    overflow: hidden;
    background-size: 100% auto !important;

    .bg_pic {
      position: absolute;
      display: flex;
      z-index: -1;
      .left_pic {
        width: 50%;
      }
      .right_pic {
        width: 50%;
        transform: scaleX(-1);
      }
    }
    .fishing_parent {
      @media only screen and (max-width: 390px) {
        padding: 0 10px !important;
      }
    }
    .fishing_con {
      position: relative;
      margin-top: 300px;
      border-radius: 22px;
      @media only screen and (max-width: 760px) {
        margin-top: 120px;
      }

      .frame_top,
      .frame_bottom {
        position: absolute;
        width: 100%;
        height: 10%;
        border: 2px solid #ff7760;
        border-radius: 45px 45px 0 0;
        border-bottom: none;
      }
      .frame_bottom {
        bottom: 0;
        border: 2px solid #ff7760;
        border-radius: 0 0 45px 45px;
        border-top: none;
      }
      .fishing_con_inner {
        padding: 60px 30px;
        @media only screen and (max-width: 1100px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0;
          margin-bottom: 160px;
        }
        .top_area {
          @media only screen and (max-width: 1110px) {
            display: none;
          }
        }
        .top_area_mobil {
          margin-bottom: 60px;
          @media only screen and (min-width: 1110px) {
            display: none;
          }
        }
        .bottom_area {
          .left_column {
            @media only screen and (max-width: 1110px) {
              padding: 0 80px;
              @media only screen and (max-width: 960px) {
                padding: 0 20px;
              }
            }
            @media only screen and (max-width: 650px) {
              display: none;
            }
          }
          .right_column {
            @media only screen and (max-width: 1110px) {
              grid-row: 1/2;
              padding: 0 80px;
              @media only screen and (max-width: 1110px) and (min-width: 860px) {
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 0 20px;
                gap: 20px;
              }
              @media only screen and (max-width: 650px) {
                padding: 0 20px;
              }
              @media only screen and (max-width: 480px) {
                padding: 0;
              }
            }
          }
          @media only screen and (max-width: 1110px) {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  `,
};
