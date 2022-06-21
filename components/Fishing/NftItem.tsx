import React, { FunctionComponent, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { css } from "@emotion/react";
import { useCountdown } from "../../hooks/useCoutdown";

const DateTimeDisplay = dynamic(() => import("../global/DateTimeDisplay"), {
  ssr: false,
});

interface Props {
  item: any;
  filter: string;
}

const NftItem: FunctionComponent<Props> = ({ item, filter }) => {
  const [days, hours, minutes, seconds] = useCountdown(item.coutdown);

  const [isOpen, setOpen] = useState(true);

  const [isMaxYard, setIsMaxYard] = useState(false);
  const [isMaxBoost, setIsMaxBoost] = useState(false);

  const [yardValue, setYardValue] = useState<number>();
  const [boostValue, setBoostValue] = useState<number>();

  const onBoost = () => {
    if (boostValue && item.boost >= boostValue) {
      alert(boostValue + " on boost");
    } else {
      alert("invalid value");
    }
  };

  const onYard = () => {
    if (yardValue && item.level >= yardValue) {
      alert(yardValue + " on yard");
    } else {
      alert("invalid value");
    }
  };

  const setMaxValue = (field: string) => {
    if (field == "yard") {
      setIsMaxYard(!isMaxYard);
      setYardValue(isMaxYard ? 0 : item.level);
    }

    if (field == "boost") {
      setIsMaxBoost(!isMaxBoost);
      setBoostValue(isMaxBoost ? 0 : item.boost);
    }
  };

  useEffect(() => {
    if (filter) {
      if (filter == "on") {
        setOpen(item.isOpen);
      } else if (filter == "off") {
        setOpen(!item.isOpen);
      } else if (filter == "all") {
        setOpen(true);
      }
    }
  }, [filter]);

  return isOpen ? (
    <div css={styles.nft_item} className="m-top-15">
      <div className="item_bg"></div>

      <div className="nft_item_inner">
        <div className="img_con flex f-wrap gap-10">
          <img className="nft_image" src={"../media/nft/" + item.image} />
          <div className="nft_detail">
            <span className="ton"> {item.ton} TON</span>
            <span className="id m-top-10 m-bottom-10">
              CAPTAIN <span className="white">#{item.id}</span>{" "}
            </span>
            <span className="est">
              EST <span className="white">{0.91}</span> FISH
            </span>
            <span className="per_day"> PER DAY</span>
            <div className="isOpen">
              {item.isOpen ? (
                <span className="on">on</span>
              ) : (
                <span className="off">off</span>
              )}
            </div>
            <div className="status">{item.status}</div>
          </div>
        </div>
        <div className="nft_info_con flex f-wrap">
          <div className="yard flex gap-10">
            <div className="process_anim"></div>
            <div className="level_bar">
              <div className="top_level">
                <span>{item.level}</span> to level up
              </div>
            </div>
            <div className="input_con">
              <div className="btn_bg"></div>
              <button
                className="btn-small btn_yard"
                onClick={() => setMaxValue("yard")}
              >
                {isMaxYard ? "Cancel" : item.level}
              </button>
              <div className="icon_yard"></div>
              <span className="down_arrow"></span>
              <span className="right_arrow"></span>
              <input
                type="number"
                max={item.level}
                placeholder={item.level}
                onChange={(e: any) => setYardValue(e.target.value)}
                value={yardValue}
              />
            </div>
            <button className="btn-medium btn_yard" onClick={() => onYard()}>
              YARD
            </button>
          </div>
          <div className="boost flex gap-10">
            <div className="process_anim"></div>
            <div className="level_bar">
              {days + hours + minutes + seconds <= 0 ? (
                <></>
              ) : (
                <div className="coutdown">
                  <DateTimeDisplay
                    days={days}
                    hours={hours}
                    minutes={minutes}
                    seconds={seconds}
                  />
                </div>
              )}
            </div>
            <div className="input_con">
              <div className="btn_bg"></div>
              <div className="icon_boost"></div>
              <span className="up_arrow"></span>
              <span className="right_arrow"></span>
              <button
                className="btn-small btn_yard"
                disabled={days + hours + minutes + seconds <= 0}
                onClick={() => setMaxValue("boost")}
              >
                {isMaxBoost ? "Cancel" : item.boost}
              </button>
              <input
                type="number"
                disabled={days + hours + minutes + seconds <= 0}
                placeholder={item.boost}
                onChange={(e: any) => setBoostValue(e.target.value)}
                value={boostValue}
              />
            </div>

            <button
              className="btn-medium btn_yard"
              disabled={days + hours + minutes + seconds <= 0}
              onClick={() => onBoost()}
            >
              BOOST
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default NftItem;

const styles = {
  nft_item: css`
    position: relative;
    width: 100%;
    padding: 24px 0 25px;
    border-radius: 45px;
    font-family: "BebasNeue";
    .item_bg {
      position: absolute;
      width: 90%;
      height: 100%;
      inset: 0;
      left: 5%;
      background: var(--fishingBlue);
      border-radius: 32px;
      z-index: -1;
    }

    .nft_item_inner {
      position: relative;
      display: grid;
      grid-template-columns: 265px auto;
      z-index: 999;
      .img_con {
        align-items: center;
        padding: 20px;
        color: var(--white);
        border-radius: 32px;
        background-color: var(--fishingDarkBlue);
        z-index: 999;
        .nft_image {
          width: 100%;
          max-width: 140px;
          border: 2px solid #9cb5e0;
          border-radius: 16px;
        }
        .nft_detail {
          position: relative;
          display: flex;
          flex-direction: column;
          .ton {
            font-family: "Russo";
            font-size: 24px;
          }
          .id,
          .est,
          .per_day {
            color: var(--fishinDarkPink);
          }
          .isOpen {
            .on,
            .off {
              position: absolute;
              left: 50%;
              bottom: -37px;
              padding: 2px 10px 0px;
              padding-left: 25px;
              transform: translate(-50%, 50%);
              border: 2px solid #9cb5e0;
              border-radius: 32px;
              color: #6aff81;
              background-color: var(--fishingDarkBlue);
              &:before {
                position: absolute;
                content: "";
                width: 15px;
                height: 15px;
                background-color: #6aff81;
                left: 6px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 50%;
                margin-top: 0px;
              }
            }
            .off {
              color: #ff4c61;
              &:before {
                background-color: #ff4c61;
              }
            }
          }
          .status {
            position: absolute;
            left: 50%;
            top: -37px;
            transform: translate(-50%, -50%);
            padding: 2px 20px 0px;
            border: 2px solid var(--fishingDarkBlue);
            border-radius: 32px;
            color: var(--white);
            background-color: #78c0d3;
          }
        }
      }
      .nft_info_con {
        position: relative;
        width: 100%;
        align-items: center;
        padding: 15px 0;
        .btn-medium {
          width: 120px;
          height: 50px;
          padding-left: 40px;
          padding-right: 40px;
          font-size: 24px;
        }
        .yard,
        .boost {
          width: 100%;
          position: relative;
          padding: 0 0 0 10px;
          gap: 15px;
          background-color: #243e6a;
          border-radius: 0 45px 45px 0;
          justify-content: space-between;
          align-items: center;
          .process_anim {
            position: relative;
            width: 18px;
            height: 18px;
            &:before {
              position: absolute;
              content: "";
              width: 18px;
              height: 18px;
              border-radius: 50%;
              inset: 0;
              border: 2px solid #93acd7;
              animation: processAnim 1.5s infinite;
              animation-timing-function: linear;
            }
            &:after {
              position: absolute;
              content: "";
              width: 12px;
              height: 12px;
              border-radius: 50%;
              top: 3px;
              left: 3px;
              border: 2px solid #fffe0e;
              border-bottom-color: transparent;
              animation: processAnim 1.5s infinite;
              animation-timing-function: linear;
            }
            @keyframes processAnim {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          }
          .level_bar {
            position: relative;
            width: 100%;
            height: 30px;
            border-radius: 32px;
            border: 2px solid #93acd7;
            &:after {
              position: absolute;
              content: "";
              width: 50%;
              height: 100%;
              border-radius: 32px;
              background: linear-gradient(
                90deg,
                rgba(52, 91, 150, 1) 35%,
                rgba(48, 200, 205, 1) 100%
              );
            }
            .top_level,
            .coutdown {
              position: absolute;
              width: 100%;
              top: -2px;
              transform: translateY(-100%);
              background-color: #243e6a;
              text-align: center;
              color: #93acd7;
              border-radius: 45px;
              font-family: "Russo";
              span {
                color: white;
              }
            }
          }
          .input_con {
            position: relative;
            .btn_bg {
              position: absolute;
              width: 78px;
              height: 70px;
              left: 50%;
              transform: translateX(-50%);
              background-color: #243e6a;
              border-radius: 16px 16px 0 0;
              bottom: 20px;
            }
            .icon_yard,
            .icon_boost {
              position: absolute;
              width: 30px;
              height: 25px;
              top: -5px;
              right: -1px;
              transform: translate(100%, -100%);
              border-radius: 0 9px 0 0;
              background: #243e6a url(media/tritoken/tritoken-yard.webp);
              background-size: 20px 20px;
              background-repeat: no-repeat;
              background-position: bottom left 5px;
            }
            .icon_boost {
              top: auto;
              bottom: -5px;
              right: -2px;
              transform: translate(100%, 100%);
              border-radius: 0 0 9px 0;
              background-image: url(media/tritoken/tritoken-fish.webp);
              background-position: top left 5px;
            }
            .up_arrow,
            .down_arrow,
            .right_arrow {
              position: absolute;
              width: 12px;
              height: 12px;
              top: -1px;
              left: 50%;
              border: 2px solid white;
              border-bottom-color: transparent;
              border-left-color: transparent;
              transform-origin: center;
              transform: translate(-50%, -100%) rotate(135deg);
            }
            .up_arrow {
              top: auto;
              bottom: -2px;
              transform: translate(-50%, 100%) rotate(-45deg);
            }
            .right_arrow {
              top: 2px;
              left: auto;
              right: 3px;
              transform: translate(100%, 100%) rotate(45deg);
            }

            .btn-small {
              position: absolute;
              top: -12px;
              left: 50%;
              height: 35px;
              transform: translate(-50%, -100%);
              font-size: 18px;
              padding-left: 22px;
              padding-right: 22px;
              z-index: 1;
            }
            input {
              position: relative;
              height: 30px;
              border: 2px solid #93acd7;
              border-radius: 24px;
              text-align: center;
              font-size: 18px;
              color: var(--white);
              &::placeholder {
                font-size: 18px;
              }
            }
          }
        }
        .boost {
          .input_con {
            .btn_bg {
              position: absolute;
              width: 88px;
              height: 50px;
              left: 50%;
              transform: translateX(-50%);
              background-color: #243e6a;

              border-radius: 0 0 16px 16px;
              top: 42px;
              bottom: auto;
            }
            .btn-small {
              top: auto;
              bottom: -13px;
              transform: translate(-50%, 100%);
            }
          }
        }
      }
    }
  `,
};
