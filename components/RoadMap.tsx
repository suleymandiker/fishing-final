import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

import { useWindowSize } from "../hooks/useWindowSize";

const RoadMap: FunctionComponent = () => {
  const { locale, local } = useContext(GlobalContext);

  const size = useWindowSize();

  const [data, setData] = useState([Object]);

  useEffect(() => {
    let jsonData = [];
    if (locale) {
      jsonData = require("/locales/roadmap-" + locale + ".json");
      setData(jsonData);
    }
    setData(jsonData);
  }, [locale]);

  return (
    <div css={styles.roadmap}>
      <h2 className="title">{local.roadmap} </h2>
      <div id="roadmap_con" className="roadmap_con max w1024 mobil_padding">
        <figure>
          <img
            width="100%"
            height="auto"
            id="roadmap_img"
            src={
              size.width > 1240
                ? "../media/roadmap/roadmap.webp"
                : "../media/roadmap/roadmap-vertical.webp"
            }
          />
        </figure>
        <div className="roadmap_dones grid">
          {data?.length > 0 &&
            data.map((item: any, index: number) => (
              <div key={index} className="item">
                <div className="item_title">{item.title}</div>
                {item?.dones?.length > 0 &&
                  item.dones.map((done: any, index: number) => (
                    <div key={index} className="done">
                      {done[index]}
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;

const styles = {
  roadmap: css`
    position: relative;
    width: 100%;
    height: auto;
    top: -300px;
    @media only screen and (max-width: 480px) {
      top: -150px;
    }
    @media only screen and (max-width: 320px) {
      top: -310px;
    }
    .item_title {
      position: relative;
    }
    .roadmap_con {
      position: relative;
      .roadmap_dones {
        grid-template-columns: 2fr 3fr 3fr 2fr;
        .item {
          width: 100%;
          max-width: 250px;
          margin-top: 20px;
          color: #97d8ff;
          justify-self: center;
          .item_title {
            margin-bottom: 20px;
            font-size: 22px;
            text-transform: uppercase;
          }
          .done {
            font-size: 18px;
            font-family: "Candara";
          }
          &:nth-of-type(2) {
            color: #9effc1;
          }
          &:nth-of-type(3) {
            color: #ffd5a8;
          }
          &:nth-of-type(4) {
            color: #ffabab;
          }
        }

        @media only screen and (max-width: 1240px) {
          width: 100%;
          max-width: 300px;
          grid-template-columns: 1fr;
          .item {
            margin-left: 0;
          }
        }

        @media only screen and (max-width: 850px) {
          .item {
            margin-bottom: 10px;
            .item_title {
              margin-bottom: 5px;
              font-size: 18px;
            }
            .done {
              font-size: 16px;
            }
          }
        }
        @media only screen and (max-width: 560px) {
          .item {
            margin-bottom: 0;
            .item_title {
              margin-bottom: 5px;
              font-size: 14px;
            }
            .done {
              font-size: 13px;
            }
          }
        }
        @media only screen and (max-width: 480px) {
          .item {
            margin-bottom: 0;
            .item_title {
              margin-bottom: 5px;
              font-size: 12px;
            }
            .done {
              font-size: 11px;
            }
          }
        }
      }
      @media only screen and (max-width: 1240px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        figure {
          max-width: 300px;
          justify-self: center;
          align-items: center;
          img {
            margin-top: -100px;
          }
        }
        .roadmap_dones {
          align-items: center;
          justify-self: center;
        }
      }
      @media only screen and (max-width: 480px) {
        figure {
          img {
            margin-top: -70px;
          }
        }
      }
    }
  `,
};
