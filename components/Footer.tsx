import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

const Footer: FunctionComponent = () => {
  const { local } = useContext(GlobalContext);

  let newDate = new Date();
  const powered_icons = [
    { name: "avax", url: "https://www.avax.network" },
    { name: "adobe", url: "https://adobe.com" },
    { name: "unity", url: "https://unity.com" },
    { name: "blender", url: "https://www.blender.org" },
    { name: "react", url: "https://reactjs.org" },
    { name: "next", url: "https://nextjs.org" },
  ];

  return (
    <div css={styles.footer} className="m-top-20">
      <hr className="top_line" />
      <div className="info flex f-wrap max w1260 mobil_padding">
        <div className="poweredby flex">
          {local.poweredby}{" "}
          <img src="/media/icon-poweredby.webp" width={30} height={30} />
        </div>
        <div className="legal">
          {" "}
          {"© " + newDate.getFullYear() + " Fishing"}
        </div>
      </div>
      <hr className="middle_line" />
      <div className="icons flex max w960 mobil_padding">
        {powered_icons?.length > 0 &&
          powered_icons.map((item: any, index: number) => (
            <a key={index} href={item.url} target="_blank" rel="noreferrer">
              <img src={"../media/footer/icon-" + item.name + ".svg"} />
            </a>
          ))}
      </div>
      <hr className="bottom_line" />
    </div>
  );
};

export default Footer;

const styles = {
  footer: css`
    position: relative;
    height: auto;
    background: var(--secondaryColor);
    padding-bottom: 20px;
    @media only screen and (max-width: 1300px) {
      padding-bottom: 120px;
    }
    @media only screen and (max-width: 480px) {
      padding-bottom: 100px;
    }
    .top_line {
      margin-bottom: 5px;
      height: 2px;
      background-color: #546d91;
    }
    .middle_line {
      margin: 5px 0;
      height: 4px;
      background-color: #29446b;
    }
    .bottom_line {
      height: 4px;
      margin-top: 5px;
      background-color: #29446b;
    }
    .info {
      justify-content: space-between;
      align-items: center;
      color: var(--primaryColor);
      font-family: "Arial";
      font-size: 16px;
      font-weight: 500;
      cursor: default;
      .poweredby {
        align-items: center;
        gap: 5px;
        text-decoration: underline;
        img {
          width: auto;
          height: 22px;
        }
      }
      .legal {
        align-items: center;
      }
    }
    .icons {
      gap: 20px;
      justify-content: space-between;
      img {
        width: auto;
        height: 90px;
      }
    }
  `,
};
