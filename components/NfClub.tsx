import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import { GlobalContext } from "../context/GlobalContext";
import { NfClubEn, NfClubEs, NfClubZh, NfClubFr } from "../locales/NfClub";

const NfClub: FunctionComponent = () => {
  const { locale } = useContext(GlobalContext);

  return (
    <div css={styles.nfclub}>
      <div className="max w1024 m-bottom-30">
        <figure>
          <img src="../media/title/title-nfclub.webp" alt="Fishing" />
        </figure>
      </div>

      <div className="mobil_padding">
        {locale == "en" && <NfClubEn />}
        {locale == "es" && <NfClubEs />}
        {locale == "zh" && <NfClubZh />}
        {locale == "fr" && <NfClubFr />}
      </div>
      <hr className="hr_line nf_club_line" />
    </div>
  );
};

export default NfClub;

const styles = {
  nfclub: css`
    position: relative;
    margin-top: 100px;
    top: -300px;
    @media only screen and (max-width: 480px) {
      top: -170px;
    }
    @media only screen and (max-width: 320px) {
      top: -350px;
    }

    .nfclub_con {
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 50px;
      @media only screen and (max-width: 980px) {
        grid-template-columns: 1fr;
        justify-content: center;
      }
      .img_con {
        @media only screen and (max-width: 980px) {
          width: 100%;
          max-width: 400px;
          margin: 0 auto 50px;
        }
      }
      .text_con {
        font-size: 24px;
        font-family: var(--secondaryFont);
        span {
          font-size: 28px;
          font-weight: 700;
          color: white;
        }
        .text {
          margin-bottom: 20px;
        }
        .text_con_inner_1 {
          display: grid;
          grid-template-columns: 4fr 5fr;
          gap: 10px;
          @media only screen and (max-width: 750px) {
            grid-template-columns: 1fr;
          }
          .text_1 {
            color: var(--blue);
          }
          .text_2 {
            color: var(--blueThin2);
          }
          .text_3 {
            color: var(--pink);
          }
          .text_4 {
            color: var(--purple);
          }
          .text_5 {
            color: var(--yellowThin1);
          }
          .text_6 {
            color: var(--blueThin1);
          }
        }
        .text_con_inner_2 {
          text-align: center;
          color: var(--yellow);
          @media only screen and (max-width: 750px) {
            text-align: left;
          }
        }
      }
    }
    .nf_club_line {
      @media only screen and (max-width: 480px) {
        display: none;
      }
    }
  `,
};
