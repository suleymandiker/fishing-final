import React, { FunctionComponent, useContext, useState } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../../context/GlobalContext";

const StakeSwap: FunctionComponent = () => {
  const { user } = useContext(GlobalContext);

  const [mode, setMode] = useState("stake");
  const [swapMode, setSwapMode] = useState("fish");
  const [hasStake, setHasStake] = useState(true);

  const [whenYouStake, setWhenYouStake] = useState<number>();
  const [whenYouSwap, setWhenYouSwap] = useState<number>();

  return (
    <div css={styles.stake_swap}>
      <div className="bg"></div>
      <div
        className={
          mode == "stake"
            ? "btns_type flex gap-10 stake"
            : "btns_type flex gap-10 swap"
        }
      >
        <button
          className={
            mode == "stake"
              ? " btn-medium  btn_active"
              : "  btn-medium  btn_not_active"
          }
          onClick={() => setMode("stake")}
        >
          <div className="x_value">{user?.stake_multipler}X</div>
          STAKE
        </button>
        <button
          className={
            mode == "swap"
              ? " btn-medium  btn_active"
              : "  btn-medium  btn_not_active"
          }
          onClick={() => setMode("swap")}
        >
          <div className="x_value">
            <span>up to</span> {user?.swap_multipler}X
          </div>
          SWAP
        </button>
      </div>

      {mode == "stake" && (
        <>
          <div className="your_total_stake flex">
            <div className="your_total_stake_inner flex">
              <div>
                <div className="avax_fish">
                  <div className="key">
                    Your Total <span>avax/fish</span>
                  </div>
                  <div className="value">{user?.your_total_fish + "000"}</div>
                </div>
                <div className="avax_yard">
                  <div className="key">
                    Your Total <span>avax/yard</span>
                  </div>
                  <div className="value">{user?.your_total_fish + "000"}</div>
                </div>
              </div>
              <div className="fish">
                <div className="key t-right">
                  Your Total <span>fish</span>
                </div>
                <div className="value">{user?.your_total_fish + "000"}</div>
              </div>
            </div>
          </div>
          <div className="staked_fish flex">
            <div>
              <p className="value">{user?.your_staked_fish + ".000000"}</p>
              <p className="key">Your Staked Fish</p>
            </div>
            <img alt="icon" src="/media/tritoken/tritoken-fish.webp" />
          </div>

          <div className="daily_yard flex">
            <div>
              <p className="value">{user?.est_daily_yard + ".000000"}</p>
              <p className="key">Est daily yard</p>
            </div>
            <img alt="icon" src="/media/tritoken/tritoken-yard.webp" />
          </div>
          <div className={hasStake ? "input_top stake" : "input_top unstake"}>
            <div className="multipler">{user?.stake_multipler}x Multiplier</div>
            <div className="btn_stake_mode flex">
              <button
                className={
                  hasStake
                    ? "btn-medium left_radius btn_active"
                    : "btn-medium left_radius btn_not_active"
                }
                onClick={() => setHasStake(true)}
              >
                stake
              </button>
              <button
                className={
                  hasStake
                    ? "btn-medium right_radius btn_not_active"
                    : "btn-medium right_radius btn_active"
                }
                onClick={() => setHasStake(false)}
              >
                unstake
              </button>
            </div>
          </div>

          <div className="stake_con">
            <div className="you_stake_input t-center m-top-20">
              <span>when you {hasStake ? "stake" : "unstake"}</span>
              <div className="flex you_stake_input_inner">
                <span className="icon" />
                <input
                  type="number"
                  value={whenYouStake}
                  onChange={(e: any) => setWhenYouStake(e.target.value)}
                />
                <button
                  className="btn_max"
                  onClick={() =>
                    setWhenYouStake(
                      whenYouStake ? 0 : user?.your_total_fish || 0
                    )
                  }
                >
                  {whenYouStake ? "X" : "max"}
                </button>
              </div>
              <span className="down_arrow"></span>
            </div>

            <div className="yard_result t-center m-top-20">
              <span>your est. daily yard</span>
              <div className="flex yard_result_inner m-top-10">
                <span className="icon" />
                <div className="result_value t-center"></div>
              </div>
            </div>

            <button className="btn-large btn_stake">Stake</button>
          </div>
        </>
      )}

      {mode == "swap" && (
        <>
          <div className="your_total_swap flex">
            <div className="your_total_swap_inner flex">
              <div className="fish">
                <div className="key t-right">
                  Your Total <span>Fish</span>
                </div>
                <div className="value">{user?.your_total_fish + "000"}</div>
              </div>

              <div className="avax_fish">
                <div className="key t-right">
                  Your Total <span>avax/fish</span>
                </div>
                <div className="value">{user?.your_total_fish + "000"}</div>
              </div>
              <div className="avax_yard">
                <div className="key t-right">
                  Your Total <span>avax/yard</span>
                </div>
                <div className="value">{user?.your_total_fish + "000"}</div>
              </div>
            </div>
            <div className="your_total_swap_bottom">
              <span>get avax/fish tokens</span>
              <br />
              <a href="https://www.google.com" rel="noreferrer" target="_blank">
                {">HERE<"}
              </a>
            </div>
          </div>
          <div className={"swap_modes flex f-wrap gap-10 " + swapMode}>
            <button
              className="btn-small btn_fish"
              onClick={() => setSwapMode("fish")}
            >
              <span className="mode">fish</span>
              <span className="title_mode">{">yard<"}</span>
              <span className="value">{"10x"}</span>
              <span className="title_multipler">multipler</span>
            </button>

            <button
              className="btn-small btn_avax_fish"
              onClick={() => setSwapMode("avax_fish")}
            >
              <span className="mode">avax / fish</span>
              <span className="title_mode">{">yard<"}</span>
              <span className="value">{"40x"}</span>
              <span className="title_multipler">multipler</span>
            </button>

            <button
              className="btn-small btn_avax_yard"
              onClick={() => setSwapMode("avax_yard")}
            >
              <span className="mode">avax / yard</span>
              <span className="title_mode">{">yard<"}</span>
              <span className="value">{"20x"}</span>
              <span className="title_multipler">multipler</span>
            </button>
          </div>
          <div className="swap_con">
            <div className="you_swap_input t-center m-top-20">
              <span>when you swap</span>
              <div className="flex you_swap_input_inner">
                <span className={"icon " + swapMode + "_icon"} />
                <input
                  type="number"
                  min={0}
                  value={whenYouSwap}
                  onChange={(e: any) => setWhenYouSwap(e.target.value)}
                />

                <button
                  className="btn_max"
                  onClick={() =>
                    setWhenYouSwap(whenYouSwap ? 0 : user?.your_total_fish || 0)
                  }
                >
                  {whenYouSwap ? "X" : "max"}
                </button>
              </div>
              <span className="down_arrow"></span>
            </div>

            <div className="yard_result t-center m-top-20">
              <span>you will receive</span>
              <div className="flex yard_result_inner m-top-10">
                <span className="icon" />
                <div className="result_value t-center"></div>
              </div>
            </div>
            <button className="btn-large btn_stake">Swap</button>
          </div>
        </>
      )}
    </div>
  );
};

export default StakeSwap;

const styles = {
  stake_swap: css`
    position: relative;
    margin-top: 80px;
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
    .btns_type {
      position: absolute;
      left: 50%;
      top: 0;
      padding: 10px 6px;
      border-radius: 32px 32px 0 0;
      background-color: var(--fishingBlue);
      transform: translate(-50%, -100%);
      &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 51.5%;
        height: 100%;
        background-color: var(--fishingDarkBlue);
        border-radius: 32px 32px 0 0;
        transition: transform 0.5s;
      }
      &.swap {
        &:before {
          width: calc(50% - 2px);
          left: 5px;
          transform: translateX(100%);
        }
      }
      .btn-medium {
        font-size: 34px;
        padding-left: 25px;
        padding-right: 25px;
        .x_value {
          position: absolute;
          min-width: 60px;
          top: -23.5px;
          left: 20px;
          padding: 0px 8px 2px;
          background: var(--fishingDarkBlue);
          border-radius: 12px 12px 0 0;
          color: var(--fishingPink);
          font-size: 16px;
          font-weight: 700;
          z-index: 1;
          span {
            font-size: 14px;
          }
        }
      }
    }
    .your_total_stake,
    .your_total_swap {
      flex-direction: column;
      height: 90px;
      align-items: center;
      justify-content: center;
      background: var(--fishingDarkBlue);
      border-radius: 32px;
      .your_total_stake_inner {
        width: 100%;
        align-items: center;
        justify-content: space-between;
        .fish,
        .avax_fish,
        .avax_yard {
          padding: 0 20px;
          .key {
            font-family: "Bebas";
            font-weight: 400;
            font-size: 12px;
            text-transform: uppercase;
            color: #c65971;
            span {
              font-size: 14px;
              color: white;
            }
          }
          .value {
            font-family: "Russo";
            font-size: 18px;
            color: var(--fishingPink);
          }
        }
        .fish {
          .key {
            font-family: "Bebas";
            font-weight: 400;
            font-size: 20px;
            text-transform: uppercase;
            color: #c65971;
            span {
              font-size: 20px;
              color: white;
            }
          }
          .value {
            font-family: "Russo";
            font-size: 28px;
            color: var(--fishingPink);
          }
        }
        .avax_fish {
          border-bottom: 1px solid var(--fishingLightPink);
        }
      }
      .your_total_swap_inner {
        align-items: center;
        .fish,
        .avax_fish,
        .avax_yard {
          padding: 0 10px;
          p {
            text-align: right;
            padding-bottom: 0;
          }
          .key {
            font-family: "Bebas";
            font-weight: 400;
            font-size: 10px;
            text-transform: uppercase;
            color: #c65971;
            span {
              font-size: 12px;
              color: white;
            }
          }
          .value {
            font-family: "Russo";
            font-size: 18px;
            color: var(--fishingPink);
          }
        }

        .fish {
          border-right: 1px solid var(--fishingLightPink);
        }
        .avax_fish {
          border-right: 1px solid var(--fishingLightPink);
        }
      }
      .your_total_swap_bottom {
        font-family: "Bebas";
        text-align: center;
        span {
          color: white;
        }
        a {
          color: #06ff00;
        }
      }
    }

    .staked_fish,
    .daily_yard {
      padding: 10px 20px;
      margin-top: 10px;
      background: var(--fishingDarkBlue);
      border-radius: 32px;
      align-items: center;
      justify-content: space-evenly;
      @media only screen and (max-width: 1110px) {
        justify-content: center;
        gap: 10px;
      }

      img {
        width: 45px;
        height: 45px;
      }
      p {
        text-align: center;
        padding-bottom: 0;
      }
      .key {
        font-family: "Bebas";
        font-weight: 400;
        font-size: 18px;
        text-transform: uppercase;
        line-height: 16px;
        color: var(--fishingPink);
      }
      .value {
        font-family: "Russo";
        font-size: 38px;

        line-height: 40px;
      }
    }

    .swap_modes {
      position: relative;
      left: 50%;
      width: max-content;
      margin-top: 45px;
      transform: translateX(-50%);
      @media only screen and (max-width: 480px) {
        gap: 5px;
      }

      &:before {
        position: absolute;
        content: "";
        bottom: -16px;
        left: -5px;
        width: 105px;
        height: 95px;
        border-radius: 28px 28px 0 0;
        background-color: var(--fishingDarkBlue);
        transition: left 0.5s;
      }
      &.fish {
        .btn_fish {
          .title_multipler {
            display: block;
          }
          .value {
            top: -38px;
            padding: 0;
            font-size: 18px;
            &:before {
              background-color: transparent;
            }
          }
        }
      }
      &.avax_fish {
        &:before {
          left: 100px;
          @media only screen and (max-width: 480px) {
            left: 95px;
          }
        }
        .btn_avax_fish {
          .title_multipler {
            display: block;
          }
          .value {
            top: -35px;
            padding: 0;
            font-size: 18px;
            &:before {
              background-color: transparent;
            }
          }
        }
      }
      &.avax_yard {
        &:before {
          left: 205px;
          @media only screen and (max-width: 480px) {
            left: 195px;
          }
        }
        .btn_avax_yard {
          .title_multipler {
            display: block;
          }
          .value {
            top: -35px;
            padding: 0;
            font-size: 18px;
            &:before {
              background-color: transparent;
            }
          }
        }
      }
      .btn-small {
        width: 95px;
        height: 42px;

        .mode {
          position: absolute;
          top: 4px;
          font-size: 12px;
        }
        .title_mode {
          position: absolute;
          bottom: 4px;
          color: var(--fishingLightPink);
          font-size: 15px;
        }

        .value,
        .title_multipler {
          position: absolute;
          top: -22px;
          color: var(--fishingLightPink);
          font-size: 14px;
          transition: 0.5s;
        }
        .value {
          width: 80%;
          padding: 3px 0 3px;
          &:before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 3px;
            left: 0;
            background-color: var(--fishingDarkBlue);
            border-radius: 32px 32px 0 0;
            z-index: -1;
            transition: background 0.5s;
          }
        }
        .title_multipler {
          display: none;
          top: -20px;
          font-size: 14px;
        }
      }
    }

    .input_top {
      position: relative;
      margin-top: 60px;
      &:before {
        position: absolute;
        content: "";
        top: -30px;
        left: 5%;
        width: 45%;
        height: 200px;
        border-radius: 32px 0 0 0;
        background: var(--fishingDarkBlue);
        transition: 0.5s;
      }
      &.unstake {
        &:before {
          transform: translateX(100%);
          border-radius: 0 32px 0 0;
        }
      }
      .multipler {
        position: absolute;
        top: -10px;
        left: 50%;
        padding: 5px 30px;
        transform: translate(-50%, -100%);
        background-color: var(--fishinDarkPink);
        border: 3px solid var(--fishingDarkBlue);
        border-radius: 32px;
        font-size: 20px;
        font-family: "Bebas";
        color: var(--white);
      }
      .btn_stake_mode {
        justify-content: center;
        .btn-medium {
          width: 100px;
          font-size: 21px;
        }
      }
    }

    .stake_con,
    .swap_con {
      position: relative;
      margin-top: 15px;
      padding: 5px 40px 50px;
      background: var(--fishingDarkBlue);
      border-radius: 32px;
      span {
        font-size: 20px;
      }
      .multipler {
        position: absolute;
        top: 0;
        left: 50%;
        padding: 5px 30px;
        transform: translate(-50%, -50%);
        background-color: var(--fishinDarkPink);
        border: 3px solid var(--fishingDarkBlue);
        border-radius: 32px;
        font-size: 20px;
        font-family: "Bebas";
        color: var(--white);
      }

      .you_swap_input,
      .you_stake_input,
      .yard_result {
        position: relative;
        font-family: "Bebas";
        font-weight: 400;
        color: #648aef;

        .you_swap_input_inner,
        .you_stake_input_inner,
        .yard_result_inner {
          justify-content: center;
          align-items: center;
          .icon {
            width: 50px;
            height: 45px;
            border: 2px solid #648aef;
            border-radius: 32px 0 0 32px;
            background-position: left center, right 1px center;
            background-repeat: no-repeat, no-repeat;
            background-size: 28px auto, 23px auto;
            transition: background 0.5s;
          }
          .fish_icon {
            background: url(media/tritoken/tritoken-fish.webp) no-repeat;
            background-position: top 7px center;
            background-size: 30px auto;
          }

          .avax_fish_icon {
            background-image: url(media/tritoken/tritoken-avax.webp),
              url(media/tritoken/tritoken-fish.webp);
          }

          .avax_yard_icon {
            background-image: url(media/tritoken/tritoken-avax.webp),
              url(media/tritoken/tritoken-yard.webp);
          }
          input,
          .result_value {
            width: 170px;
            height: 45px;
            border: 2px solid #648aef;
            border-left-width: 0;
            border-right-width: 0;
            border-radius: 0;
            text-align: center;
            font-size: 28px;
            color: var(--white);
          }
          .btn_max {
            width: 50px;
            height: 45px;
            border: 2px solid #648aef;
            border-radius: 0 32px 32px 0;
            color: #648aef;
          }
        }
        .you_stake_input_inner {
          .icon {
            background: url(media/tritoken/tritoken-fish.webp) no-repeat;
            background-position: top 7px center;
            background-size: 30px auto;
          }
        }
        .down_arrow {
          position: absolute;
          width: 20px;
          height: 20px;
          bottom: 7px;
          left: 50%;
          border: 3px solid #648aef;
          border-bottom-color: transparent;
          border-left-color: transparent;
          transform-origin: center;
          transform: translate(-50%, 100%) rotate(135deg);
        }
      }

      .yard_result {
        .yard_result_inner {
          .icon {
            background: url(media/tritoken/tritoken-yard.webp) no-repeat;
            background-position: top 7px center;
            background-size: 30px auto;
          }

          .result_value {
            display: flex;
            align-items: center;
            padding: 0 10px;
            width: 220px;
            height: 45px;
            border: 2px solid #648aef;
            border-left-width: 0;
            border-radius: 0 32px 32px 0;
            font-size: 28px;
            color: var(--white);
          }
        }
      }
      .btn_stake {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }
    .stake_con {
      margin-top: 10px;
    }
  `,
};
