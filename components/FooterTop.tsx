import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import LogoFooter from "../public/media/logo-footer.webp";
import WhitePaper from "../public/media/whitepaper.webp";
import { GlobalContext } from "../context/GlobalContext";
import MainVideo from "./MainVideo";
import { useWindowSize } from "../hooks/useWindowSize";

interface Props {
  view?: string;
}

const FooterTop: FunctionComponent<Props> = ({ view = "" }) => {
  const { local, social_links } = useContext(GlobalContext);
  const size = useWindowSize();

  const captain = "123123123123213";
  const fish = "123123123123";
  const yard = "123123123123";

  const social_medias = [
    { name: "discord", url: social_links?.discord || "" },
    { name: "twitter", url: social_links?.twitter || "" },
    { name: "youtube", url: social_links?.youtube || "" },
  ];

  return (
    <div
      css={styles.footer_top}
      style={view == "index" ? { marginTop: "-300px" } : {}}
    >
      {size.width < 480 && view == "index" && (
        <>
          <h2 className="title">{local.cinematic} </h2>
          <div className="mobil_video  mobil_padding">
            <MainVideo />
            <div className="slogan t-center">{local.slogan}</div>
          </div>
          <hr className="hr_line m-top-30 m-bottom-30" />
        </>
      )}
      <div className="footer_top_con flex f-wrap max w1024  mobil_padding">
        <div className="meta_con">
          <figure>
            <Image src={LogoFooter} />
          </figure>
          <div className="meta_con_inner m-top-20">
            <div className="meta_item">
              <div className="key m-right-10">{local.captain}</div>
              <div className="value_con">
                <p className="value">{captain}</p>
                <a
                  href="https://www.google.com"
                  className="contract_link"
                  rel="noreferrer"
                  target="_blank"
                ></a>
              </div>
            </div>
            <div className="meta_item">
              <div className="key m-right-10">${local.fish}</div>
              <div className="value_con">
                <p className="value">{fish}</p>
                <a
                  href="https://www.google.com"
                  style={{ borderRadius: 0 }}
                  className="contract_link"
                  rel="noreferrer"
                  target="_blank"
                ></a>
                <button
                  className="wallet"
                  onClick={() => alert("...")}
                ></button>
              </div>
            </div>
            <div className="meta_item">
              <div className="key m-right-10">${local.yard}</div>
              <div className="value_con">
                <p className="value">{yard}</p>
                <a
                  href="https://www.google.com"
                  style={{ borderRadius: 0 }}
                  className="contract_link"
                  rel="noreferrer"
                  target="_blank"
                ></a>
                <button
                  className="wallet"
                  onClick={() => alert("...")}
                ></button>
              </div>
            </div>
          </div>
        </div>
        <div className="social_con">
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            <figure className="m-bottom-20">
              <Image src={WhitePaper} />
            </figure>
          </a>

          <div className="social_con_inner flex">
            <span>{local.join_the_comminty} </span>
            {social_medias?.length > 0 &&
              social_medias.map((item: any, index: number) => (
                <a key={index} href={item.url} target="_blank" rel="noreferrer">
                  <figure>
                    <img src={"../media/icon-" + item.name + ".webp"} />
                  </figure>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;

const styles = {
  footer_top: css`
    position: relative;
    @media only screen and (max-width: 480px) {
      margin-top: -160px;
    }
    @media only screen and (max-width: 320px) {
      margin-top: -340px;
    }
    .mobil_video {
      .slogan {
        color: var(--primaryColor);
      }
    }
    .footer_top_con {
      justify-content: space-between;
      @media only screen and (max-width: 735px) {
        justify-content: center;
      }

      .meta_con {
        figure {
          display: block;
          width: 100%;
          max-width: 150px;
          @media only screen and (max-width: 735px) {
            margin: 0 auto;
          }
        }
        @media only screen and (max-width: 735px) {
          margin-bottom: 40px;
        }
        @media only screen and (max-width: 480px) {
          margin-bottom: 20px;
        }
        .meta_con_inner {
          .meta_item {
            display: grid;
            grid-template-columns: 1fr 3fr;
            margin-bottom: 15px;
            color: #d1e8ed;

            .key {
              font-size: 18px;
              letter-spacing: 1.5px;
              text-transform: uppercase;

              @media only screen and (max-width: 480px) {
                width: 90px;
              }
            }
            .value_con {
              display: flex;
              align-items: center;

              .value {
                display: block;
                width: 100px;
                height: 30px;
                padding: 0 5px;
                border: 1px solid var(--borderColor);
                border-radius: 6px 0 0 6px;
                background: var(--darkBlue);
                font-size: 16px;
                letter-spacing: 0.1px;
                font-family: "Arial";
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .contract_link {
                width: 30px;
                height: 30px;
                background: var(--darkBlue) url(../media/icon-eye.webp) center
                  center no-repeat;
                background-size: 15px auto;
                border: 1px solid var(--borderColor);
                border-radius: 0 6px 6px 0;
                border-left: none;
              }
              .wallet {
                width: 30px;
                height: 30px;
                background: var(--darkBlue) url(../media/icon-wallet.webp)
                  center center no-repeat;
                background-size: 20px auto;
                border: 1px solid var(--borderColor);
                border-left: none;
                border-radius: 0 6px 6px 0;
              }
            }
          }
        }
      }

      .social_con {
        text-align: right;
        @media only screen and (max-width: 735px) {
          text-align: center;
        }
        figure {
          display: inline-block;
          width: 100%;
          max-width: 250px;
        }
        .social_con_inner {
          gap: 20px;
          align-items: center;
          font-weight: 700;
          color: #adc6d2;
          font-size: 28px;
          font-family: "Bitcrusher";
          span {
            width: max-content;

            text-transform: uppercase;
          }
          figure {
            img {
              width: 35px;
            }
          }
        }
      }
    }
  `,
};
