import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";

const SocialWidget: FunctionComponent = () => {
  const { social_links } = useContext(GlobalContext);

  const social_medias = [
    { name: "discord", url: social_links?.discord || "" },
    { name: "twitter", url: social_links?.twitter || "" },
  ];

  return (
    <div css={styles.social_widget}>
      <div className="social_con flex f-wrap">
        {social_medias?.length > 0 &&
          social_medias.map((item: any, index: number) => (
            <a key={index} href={item.url} target="_blank">
              <figure>
                <img
                  src={"../media/icon-fix-" + item.name + ".webp"}
                  alt="social icons"
                />
              </figure>
            </a>
          ))}
      </div>
    </div>
  );
};

export default SocialWidget;

const styles = {
  social_widget: css`
    position: fixed;
    right: 40px;
    bottom: 40px;
    z-index: 999999;
    @media only screen and (max-width: 480px) {
      right: 20px;
      bottom: 20px;
    }
    .social_con {
      gap: 10px;
      @media only screen and (max-width: 480px) {
        flex-direction: column;
        gap: 5px;
      }
      img {
        width: 50px;
        @media only screen and (max-width: 480px) {
          width: 40px;
        }
      }
    }
  `,
};
