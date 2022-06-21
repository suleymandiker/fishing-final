import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

const Features: FunctionComponent = () => {
  var texts: any;
  var fontSizeDesktop = 34;
  var fontSizeMobil = 28;
  var threshold = 3;

  const { locale, local } = useContext(GlobalContext);
  const [data, setData] = useState([Object]);

  const resize_to_fit = (windowType: string) => {
    var fontSize = fontSizeDesktop;
    if (windowType == "desktop") {
      fontSize = fontSizeDesktop;
    } else if (windowType == "mobil") {
      fontSize = fontSizeMobil;
    }
    for (let i = 0; i < texts.length; i++) {
      let newFontSize = texts[i].outerText.length % 100;
      newFontSize = texts[i].outerText.length - newFontSize;
      newFontSize = fontSize - (newFontSize / 100) * threshold;
      texts[i].children[0].style.fontSize = newFontSize + "px";
    }
  };

  const handleResize = () => {
    texts?.length == 6 &&
      resize_to_fit(window.innerWidth <= 480 ? "mobil" : "desktop");
  };

  useEffect(() => {
    if (typeof window != "undefined") {
      texts = document.getElementsByClassName("resize_text");
      texts?.length == 6 &&
        resize_to_fit(window.innerWidth <= 480 ? "mobil" : "desktop");
    }
  }, [data]);

  typeof window != "undefined" &&
    window.addEventListener("resize", handleResize);

  useEffect(() => {
    let jsonData = [];
    if (locale) {
      jsonData = require("/locales/features-" + locale + ".json");
      setData(jsonData);
    }
    setData(jsonData);
  }, [locale]);

  return (
    <div css={styles.features} className="max w1366">
      <h2 className="title">{local.features}</h2>
      <div className="features_con flex f-wrap  max w1260 mobil_padding">
        {data?.length > 0 &&
          data.map((item: any, index: number) => (
            <div key={index} className="feature_item">
              <div className="image">
                <img
                  width="380px"
                  height="auto"
                  src={"../media/features/" + item.name + ".webp"}
                  alt={item.name}
                />
              </div>
              <div className="image_hover">
                <img
                  width="380px"
                  height="auto"
                  src={"../media/features/" + item.name + "-hover.webp"}
                  alt={item.name}
                />
                <div
                  className="text resize_text"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></div>
                {/* <div className="text resize_text t-center"> {item.text}</div> */}
                {/* <img src={"../media/nft/" + item.filename} /> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Features;

const styles = {
  features: css`
    position: relative;
    width: 100%;
    margin-top: 50px;
    top: -300px;
    @media only screen and (max-width: 480px) {
      top: -150px;
    }
    @media only screen and (max-width: 320px) {
      top: -310px;
    }
    .features_con {
      position: relative;
      justify-content: space-evenly;
      gap: 20px;
      margin-top: 70px;
      @media only screen and (max-width: 480px) {
        gap: 0;
      }
      @media only screen and (max-width: 320px) {
        margin-top: -18px;
      }

      .feature_item {
        position: relative;
        display: inline-block;
        width: 400px;
        height: 200px;
        margin-bottom: 50px;
        cursor: pointer;
        @media only screen and (max-width: 480px) {
          width: 350px;
          height: 200px;
          margin-bottom: 40px;
        }
        @media only screen and (max-width: 320px) {
          width: 280px;
        }

        .image,
        .image_hover {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: auto;
          @media only screen and (max-width: 480px) {
            width: 350px;
          }
          @media only screen and (max-width: 320px) {
            width: 280px;
          }
        }

        .image_hover {
          display: flex;
          bottom: 0;
          opacity: 0;
          transition: opacity 0.3s;
          .text {
            position: absolute;
            width: 450px;
            left: -35px;
            align-self: center;
            @media only screen and (max-width: 480px) {
              width: 100%;
              left: auto;
            }

            p {
              color: var(--white);
              font-weight: 700;
              font-size: 22px;
              text-align: center;
              line-height: 30px;
              font-family: "Bitcrusher";
              span {
                font-size: 18px;
              }
              @media only screen and (max-width: 480px) {
                line-height: 27px;
                span {
                  font-size: 15px;
                }
              }
            }

            @media only screen and (max-width: 480px) {
              width: 100%;
              left: 0;
            }
          }
        }
        &:hover {
          .image_hover {
            opacity: 1;
          }
        }
        &:nth-of-type(1) {
          .image_hover {
            bottom: 9px;
            left: 5px;
            .text {
              margin-top: 34px;
              p {
                @media only screen and (max-width: 480px) {
                  line-height: 32px;
                }
              }
            }
          }
        }
        &:nth-of-type(2) {
          .image_hover {
            bottom: 9px;
            left: 3px;
            @media only screen and (max-width: 480px) {
              bottom: 8px;
              left: 3px;
            }
            @media only screen and (max-width: 320px) {
              bottom: 7px;
              left: 2px;
            }
            .text {
              margin-top: 34px;
              p {
                @media only screen and (max-width: 480px) {
                  line-height: 25px;
                }
                @media only screen and (max-width: 320px) {
                  font-size: 15px !important;
                  line-height: 18px !important;
                }
              }
            }
          }
        }
        &:nth-of-type(3) {
          .image_hover {
            bottom: 11px;
            left: 1px;
            @media only screen and (max-width: 480px) {
              bottom: 10px;
              left: 1px;
            }
            @media only screen and (max-width: 320px) {
              bottom: 8px;
            }
            .text {
              margin-top: 40px;
              p {
                @media only screen and (max-width: 480px) {
                  line-height: 27px;
                }
                @media only screen and (max-width: 320px) {
                  font-size: 20px !important;
                }
              }
            }
          }
        }
        &:nth-of-type(4) {
          .image_hover {
            @media only screen and (min-width: 480px) {
              left: -1px;
            }
            .text {
              margin-top: 45px;
              p {
                @media only screen and (max-width: 480px) {
                  font-size: 21px !important;
                }
                @media only screen and (max-width: 320px) {
                  font-size: 18px !important;
                  line-height: 18px !important;
                }
              }
            }
          }
        }
        &:nth-of-type(5) {
          .image_hover {
            bottom: 2px;
            left: 11px;
            img {
              width: 382px !important;
            }
            @media only screen and (max-width: 480px) {
              width: 352px !important;
              bottom: 2px;
              left: 11px;
            }
            @media only screen and (max-width: 320px) {
              width: 280px !important;
              bottom: 2px;
              left: 11px;
            }
            .text {
              margin-top: 45px;
              p {
                @media only screen and (max-width: 320px) {
                  font-size: 20px !important;
                  line-height: 20px !important;
                }
              }
            }
          }
        }
        &:nth-of-type(6) {
          .image_hover {
            bottom: 5px;
            left: 0;
            @media only screen and (max-width: 480px) {
              bottom: 4px;
              left: 0;
            }
            .text {
              margin-top: 18px;
              p {
                @media only screen and (max-width: 480px) {
                  font-size: 28px !important;
                  line-height: 29px;
                }
                @media only screen and (max-width: 320px) {
                  font-size: 22px !important;
                  line-height: 22px !important;
                }
              }
            }
          }
        }
      }
    }
  `,
};
