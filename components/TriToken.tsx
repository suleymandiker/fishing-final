import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import TriTokenUcgen from "../public/media/tritoken/tritoken-ucgen.webp";
import { GlobalContext } from "../context/GlobalContext";

const TriToken: FunctionComponent = () => {
  const { locale, local } = useContext(GlobalContext);

  const [data, setData] = useState([Object]);

  useEffect(() => {
    let jsonData = [];
    if (locale) {
      jsonData = require("/locales/tritoken-" + locale + ".json");
      setData(jsonData);
    }
    setData(jsonData);
  }, [locale]);

  return (
    <div css={styles.tri_token}>
      <h2 className="title">{local.tritoken_ecosystem}</h2>
      <div className="tri_token_con max w1350 grid mobil_padding">
        <div className="tri_token_items">
          {data?.length > 0 &&
            data.map((item: any, index: number) => (
              <div key={index} className="item flex">
                <img className="icon" src={"../media/tritoken/" + item.icon} />
                <div className="info">
                  <div className="item_title">{item.title} </div>
                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
        <figure>
          <Image src={TriTokenUcgen} layout="responsive" />
        </figure>
      </div>
    </div>
  );
};

export default TriToken;

const styles = {
  tri_token: css`
    position: relative;
    top: -300px;
    @media only screen and (max-width: 480px) {
      top: -150px;
    }
    @media only screen and (max-width: 320px) {
      top: -310px;
    }
    .tri_token_con {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-template-columns: 5fr 4fr;
      justify-items: center;
      @media only screen and (max-width: 1400px) {
        padding: 0 20px;
      }
      @media only screen and (max-width: 970px) {
        grid-template-columns: 1fr;
      }
      figure {
        width: 100%;
        max-width: 500px;
        align-self: center;
        @media only screen and (max-width: 970px) {
          grid-row: 1 /2;
          margin-bottom: 40px;
        }
      }
      .tri_token_items {
        .item {
          margin-bottom: 20px;
          .icon {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }
          .info {
            color: var(--white);
            .item_title {
              margin-bottom: 5px;
              font-size: 22px;
              letter-spacing: 1.5px;
              font-weight: 700;
            }
            .text {
              p {
                font-family: "Candara";
                font-style: italic;
                line-height: 24px;
                font-size: 21px;
                b {
                  font-size: 23px;
                }
              }
            }
            @media only screen and (max-width: 480px) {
              .item_title {
                font-size: 18px;
              }
              .text {
                font-size: 14px;
              }
            }
          }
        }
      }
      @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr;
      }
    }
  `,
};
