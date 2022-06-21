import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../../context/GlobalContext";

const ClaimYard: FunctionComponent = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div css={styles.stake_swap}>
      <div className="bg"></div>
      <div className="btn_bg"></div>

      <div className="claimable_yard">
        <div className="claim_yard_title">claim yard</div>
        <div>
          <p className="key">Total Yard Held</p>
          <p className="value">{user?.your_total_held + "000"} </p>
        </div>
      </div>

      <div className="stake_con flex f-wrap">
        <div className="flex f-wrap gap-20 value">
          <span> {user?.your_claimable_yard + ".000000"}</span>
          <img
            src="/media/tritoken/tritoken-yard.webp"
            width={30}
            height={30}
            alt="icon"
          />
        </div>
        <div className="key">your claimable yard</div>
        <button className="btn-large btn_stake">claim</button>
      </div>
      <button className="btn btn_claim_all">claim and unstake all fish</button>
    </div>
  );
};

export default ClaimYard;

const styles = {
  stake_swap: css`
    position: relative;
    margin-top: 60px;
    .bg {
      position: absolute;
      width: 90%;
      height: calc(100% + 20px);
      inset: 0;
      left: 5%;
      background: var(--fishingBlue);
      border-radius: 32px;
      z-index: -1;
      @media only screen and (max-width: 1110px) and (min-width: 860px) {
        height: 450px;
      }
    }
    @media only screen and (max-width: 1110px) and (min-width: 860px) {
      margin-top: 100px;
    }

    .claimable_yard {
      position: relative;
      padding: 40px 20px 0;
      margin-top: 20px;
      background: var(--fishingDarkBlue);
      border-radius: 32px;
      .claim_yard_title {
        position: absolute;
        top: 3px;
        font-size: 36px;
        font-family: "Bebas";
        color: #ff6678;
      }

      p {
        text-align: right;
        padding-bottom: 0;
      }
      .key {
        font-family: "Bebas";
        font-weight: 400;
        font-size: 18px;
        text-transform: uppercase;
        line-height: 2px;
        color: #c65971;
      }
      .value {
        font-family: "Russo";
        font-size: 28px;
        color: var(--fishingPink);
      }
    }

    .stake_con {
      position: relative;
      flex-direction: column;
      align-items: center;
      margin-top: 28px;
      padding: 40px 40px 50px;
      background: var(--fishingDarkBlue);
      border-radius: 32px;
      .btn_stake {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }

      .value {
        font-family: "Russo";
        align-items: center;
        font-size: 45px;
        color: white;
      }

      .key {
        font-family: "Bebas";
        font-size: 24px;
        color: var(--fishinDarkPink);
      }
    }
    .btn_claim_all {
      height: 45px;

      margin-top: 50px;
      left: 50%;
      transform: translateX(-50%);
      color: #648aef;
      &:before {
        border-color: transparent;
      }
    }
  `,
};
