import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../../context/GlobalContext";

const TotalTon: FunctionComponent = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div css={styles.total_ton}>
      <div className="total_ton_con">
        <div className="top_title t-center">TOTAL TON OF YOUR CAPACITY</div>
        <div className="bottom_title t-center">TOTAL TON IN THE SEA</div>
        <div className="grid col-5-9 values">
          <div className="values_inner">
            <div className="capacity_ton t-right">
              {user?.total_ton_capacity}
            </div>
            <div className="sea_ton t-right">{user?.total_ton_sea}</div>
          </div>
          <span className="title_ton t-center">TON</span>
        </div>
      </div>
    </div>
  );
};

export default TotalTon;

const styles = {
  total_ton: css`
    position: relative;
    .total_ton_con {
      position: relative;
      width: 100%;
      max-width: 350px;
      height: 75px;
      padding: 2px 10px;
      line-height: 35px;
      border-radius: 24px;
      font-family: "Russo";
      background-color: var(--fishingDarkBlue);
      color: var(--white);

      .top_title,
      .bottom_title {
        position: absolute;
        width: 90%;
        top: 0;
        left: 5%;
        padding-bottom: 8px;
        transform: translateY(-100%);
        color: #cce4ef;
        font-family: "Bebas";
        font-size: 24px;
        border-radius: 24px 24px 0 0;
        background-color: var(--fishingBlue);
        &:after {
          position: absolute;
          content: "";
          width: 15px;
          height: 15px;
          bottom: 5px;
          left: 50%;
          transform: translateX(-50%) rotate(135deg);
          border: 3px solid white;
          border-bottom-color: transparent;
          border-left-color: transparent;
          transform-origin: center;
        }
      }
      .bottom_title {
        top: auto;
        bottom: 0;
        padding-top: 8px;
        padding-bottom: 0;
        transform: translateY(100%);
        border-radius: 0 0 24px 24px;
        &:after {
          top: 5px;
          bottom: auto;
          transform: translateX(-50%) rotate(-45deg);
        }
      }
      .values {
        align-items: center;
        .values_inner {
          font-size: 38px;
          color: var(--fishingPink);
          .capacity_ton {
            width: 100%;
            border-bottom: 1px solid white;
          }
        }
        .title_ton {
          font-size: 60px;
        }
      }
    }
  `,
};
