import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../../context/GlobalContext";

const Claim: FunctionComponent = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div css={styles.claim}>
      <div className="claim_con">
        <div className="claim_inner">
          <div className="claim_bg"></div>
          <div className="top_title">AVAILABLE FISH TO CLAIM</div>
          <div className="middle_area flex">
            <div className="claim_value">{user?.your_total_fish + "00"}</div>
            <img className="icon_fish" src="/media/claim_fish.webp" />
            <button className="btn-large">CLAIM</button>
          </div>
          <div className="bottom_title">
            est. <span>0.0000000</span> fish a day
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;

const styles = {
  claim: css`
    position: relative;
    .claim_con {
      position: relative;
      width: 100%;
      max-width: 500px;
      height: 65px;
      line-height: 35px;
      border-radius: 24px;
      font-family: "Russo";
      color: var(--white);
      .claim_inner {
        width: 100%;
        max-width: 500px;
        height: 65px;
        border-radius: 18px;
        .claim_bg {
          position: absolute;
          width: 95%;
          height: 100%;
          inset: 0;
          left: 2.5%;
          background: var(--fishingDarkBlue);
          border-radius: 32px;
        }
        .middle_area {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-left: 50px;
          .claim_value {
            position: relative;
            margin-right: 20px;
            font-size: 52px;
            color: var(--fishingPink);
          }
          .icon_fish {
            width: 48px;
            margin-right: 20px;
          }
        }

        .top_title,
        .bottom_title {
          position: absolute;
          top: 0;
          left: 50px;
          width: 300px;
          height: 65px;
          padding-bottom: 30px;
          text-align: center;
          transform: translateY(-50%);
          color: #cce4ef;
          font-size: 25px;
          font-family: "Bebas";
          background-color: var(--fishingBlue);
          border-radius: 18px;
          z-index: -1;
          span {
            position: relative;
            top: 0;
            width: 100%;
          }
        }
        .bottom_title {
          top: auto;
          bottom: 0;
          padding-top: 30px;
          padding-bottom: 0;
          transform: translateY(50%);
          font-size: 16px;
          font-family: "Russo";
          span {
            color: var(--fishingPink);
          }
        }
      }
    }
  `,
};
