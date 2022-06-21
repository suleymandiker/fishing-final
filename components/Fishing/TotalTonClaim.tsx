import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../../context/GlobalContext";

const ClaimYard: FunctionComponent = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div css={styles.total_ton_claim}>
      <div className="bg"></div>
      <div className="btn_bg"></div>
      <div className="total_ton_con">
        <div className="grid col-6-9 values">
          <div className="values_inner">
            <div className="capacity_ton t-right">
              <span>TOTAL TON OF YOUR CAPACITY</span>
              {user?.total_ton_capacity}
            </div>
            <div className="sea_ton t-right">
              <span>TOTAL TON IN THE SEA</span>
              {user?.total_ton_sea}
            </div>
          </div>
          <span className="title_ton t-center">TON</span>
        </div>
      </div>

      <div className="claim_con flex">
        <div className="top_title">AVAILABLE FISH TO CLAIM</div>
        <div className="flex f-wrap gap-20 value">
          <span> {user?.your_total_fish + "000"}</span>
          <img
            src="/media/tritoken/tritoken-fish.webp"
            width={50}
            height={50}
            alt="icon"
          />
        </div>
        <div className="bottom_title">
          est. <span>0.0000000</span> fish a day
        </div>
        <button className="btn-large btn_stake">claim</button>
      </div>
    </div>
  );
};

export default ClaimYard;

const styles = {
  total_ton_claim: css`
    position: relative;
    .bg {
      position: absolute;
      width: 90%;
      height: calc(100% + 20px);
      inset: 0;
      left: 5%;
      background: var(--fishingBlue);
      border-radius: 32px;
      z-index: -1;
    }

    .total_ton_con {
      position: relative;
      width: 90%;
      left: 5%;
      padding: 0 20px;
      margin-top: 20px;
      border-radius: 32px 32px 0 0;

      .values {
        align-items: center;
        justify-content: space-between;
        font-family: "Russo";
        align-items: center;
        font-size: 15px;
        color: white;
        .values_inner {
          color: #cce4ef;
          .capacity_ton,
          .sea_ton {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 38px;
            @media only screen and (max-width: 480px) {
              font-size: 30px;
            }
            span {
              font-family: "Bebas";
              font-size: 18px;
              @media only screen and (max-width: 480px) {
                font-size: 13px;
              }
            }
          }

          .capacity_ton {
            border-bottom: 1px solid #cce4ef;
          }
        }
        .title_ton {
          color: #cce4ef;
          font-size: 55px;
          @media only screen and (max-width: 480px) {
            font-size: 45px;
          }
        }
      }
    }

    .claim_con {
      position: relative;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 40px 35px;
      background: var(--fishingDarkBlue);
      border-radius: 32px;
      font-family: "Bebas";
      .top_title,
      .bottom_title {
        font-size: 24px;
        color: white;
        @media only screen and (max-width: 390px) {
          font-size: 20px;
        }
      }
      .bottom_title {
        font-size: 20px;
        font-family: "Russo";
        @media only screen and (max-width: 390px) {
          font-size: 18px;
        }
        span {
          color: var(--fishingPink);
        }
      }
      .value {
        font-family: "Russo";
        align-items: center;
        font-size: 55px;
        color: var(--fishingPink);
        @media only screen and (max-width: 480px) {
          font-size: 40px;
          img {
            width: 40px;
            height: 40px;
          }
        }
        @media only screen and (max-width: 390px) {
          font-size: 35px;
        }
      }
      .btn_stake {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }
  `,
};
