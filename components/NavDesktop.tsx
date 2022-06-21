import React, { FunctionComponent } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Logo from "../public/media/logo.webp";
import NFClub from "../public/media/nav/nfclub.webp";
import ConectWallet from "../public/media/nav/connect-wallet.webp";
import Link from "next/link";
import ActiveLink from "./global/ActiveLink";

type Props = {
  isSticky: boolean;
};

const Nav: FunctionComponent<Props> = ({ isSticky }) => {
  const menu = [
    { title: "Home", url: "" },
    { title: "Mint", url: "mint" },
    { title: "Market", url: "market" },
    { title: "logo", url: "#" },
    { title: "Wallet", url: "wallet" },
    { title: "Fishing", url: "fishing" },
    { title: "Leaderboard", url: "leaderboard" },
  ];

  return (
    <div css={styles.nav_con} className={isSticky ? "max menu_hide" : "max"}>
      <nav className="max">
        <ul>
          <li className="nfclub">
            <a href="#">
              <Image alt="NF Club Logo" src={NFClub} />
            </a>
          </li>
          <li className="line"></li>
          {menu?.length > 0 &&
            menu.map((item: any, index: number) =>
              item.url == "#" ? (
                <li key={index} className="logo">
                  <Link href="/" passHref>
                    <a>
                      <Image src={Logo} layout="intrinsic" alt="Fishing Logo" />
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="menu_item" key={index} title={item.title}>
                  <ActiveLink activeClassName="active" href={"/" + item.url}>
                    <a>{item.title}</a>
                  </ActiveLink>
                </li>
              )
            )}
          <li className="line"></li>
          <li className="connect_wallet" onClick={() => alert("...")}>
            <Image alt="Fishing" src={ConectWallet} />
          </li>
        </ul>
        <div></div>
      </nav>
    </div>
  );
};

export default Nav;

const styles = {
  nav_con: css`
    position: absolute;
    height: 170px;
    transform: translateY(0);
    transform-origin: top;
    transition: transform 0.3s;
    left: 0;
    z-index: 9999;
    &.menu_hide {
      transform: translateY(-200%);
    }
    nav {
      position: relative;
      height: 100%;
      margin-top: 20px;
      padding: 0 150px;
      @media only screen and (min-width: 2000px) {
        margin-top: 50px;
      }
      ul {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        gap: 30px;
        .logo {
          width: 100%;
          max-width: 350px;
          align-self: center;
          justify-self: center;
        }
        .menu_item {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.5s;
          &:hover {
            a {
              border-color: var(--fishingLightPink);
              text-shadow: white 0 0 1px, var(--backgroundcolor) 0 1px 1px,
                var(--backgroundcolor) 0 4px 1px;
            }
          }
        }
        li {
          padding: 0;
          margin: 0;
          cursor: pointer;
          a {
            padding: 5px 0;
            font-size: 28px;
            cursor: pointer;
            color: var(--primaryColor);
            text-transform: uppercase;
            border-bottom: 2px solid transparent;

            transition: 0.3s;
            @media only screen and (min-width: 2000px) {
              font-size: 38px;
            }

            @media only screen and (max-width: 1900px) {
              font-size: 24px;
            }
            @media only screen and (max-width: 1700px) {
              font-size: 22px;
            }
          }
          .active {
            border-color: var(--fishingLightPink);
            text-shadow: white 0 0 1px, var(--backgroundcolor) 0 1px 1px,
              var(--backgroundcolor) 0 4px 1px;
          }
        }
      }
      .nfclub {
        position: absolute;
        width: 200px;
        left: -120px;
        top: 0;
      }
      .connect_wallet {
        position: absolute;
        width: 200px;
        right: -120px;
        top: 0;
      }
      .line {
        width: 100%;
        max-width: 80px;
        border-top: 2px solid var(--primaryColor);
        padding: 0;
        margin: 0;
        padding-bottom: 10px;
        cursor: default;
        pointer-events: none;
      }
    }
  `,
};
