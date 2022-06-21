import React, { FunctionComponent } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Logo from "../public/media/logo.webp";
import NFClub from "../public/media/nav/nfclub-small.webp";
import ConectWallet from "../public/media/nav/connect-wallet-small.webp";
import ActiveLink from "./global/ActiveLink";
import Link from "next/link";

type Props = {
  isSticky: boolean;
};

const NavSticky: FunctionComponent<Props> = ({ isSticky }) => {
  const sticky_menu = [
    { title: "Home", url: "" },
    { title: "Mint", url: "mint" },
    { title: "Market", url: "market" },
    { title: "logo", url: "#" },
    { title: "Wallet", url: "wallet" },
    { title: "Fishing", url: "fishing" },
    { title: "Leaderboard", url: "leaderboard" },
  ];

  return (
    <div css={styles.nav_sticky_con} className={isSticky ? "menu_active" : ""}>
      <nav className="max">
        <ul className="max w1366">
          <li className="nfclub">
            <Image alt="NF Club Logo" src={NFClub} />
          </li>
          {sticky_menu?.length > 0 &&
            sticky_menu.map((item: any, index: number) =>
              item.url == "#" ? (
                <li key={index} className="logo">
                  <Link href={"/"} passHref>
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

          <li className="connect_wallet">
            <Image alt="Fishing" src={ConectWallet} />
          </li>
        </ul>
        <div></div>
      </nav>
    </div>
  );
};

export default NavSticky;

const styles = {
  nav_sticky_con: css`
    position: fixed;
    width: 100%;
    height: 50px;
    transform: translateY(-500%);
    transform-origin: top center;
    transition: 0.3s;
    pointer-events: none;
    z-index: 9999;
    &.menu_active {
      pointer-events: auto;
      transform: translateY(0);
    }
    nav {
      position: relative;
      display: flex;
      height: 100%;
      margin-top: 20px;
      justify-content: space-evenly;
      align-items: center;
      background: rgba(25, 54, 96, 0.69);
      ul {
        position: relative;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 40px;
        gap: 10px;
        @media only screen and (max-width: 1020px) {
          overflow: hidden;
        }
        .logo {
          width: 180px;
          z-index: 2;
        }
        .menu_item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          margin-top: 5px;
          &:hover {
            a {
              border-color: var(--fishingLightPink);
              text-shadow: white 0 0 2px, var(--secondaryColor) 0 1px 1px,
                var(--secondaryColor) 0 4px 1px;
            }
          }
        }
        li {
          padding: 0;
          margin: 0;
          cursor: pointer;
          a {
            padding: 0;
            color: var(--primaryColor);
            font-size: 22px;
            cursor: pointer;
            text-transform: uppercase;
            border-bottom: 1px solid red;
            border-color: transparent;
          }
          .active {
            border-color: var(--fishingLightPink);
            text-shadow: white 0 0 2px, var(--secondaryColor) 0 1px 1px,
              var(--secondaryColor) 0 4px 1px;
          }
        }
        .nfclub {
          position: relative;
          width: 180px;
          margin-top: 7px;
        }
        .connect_wallet {
          width: 145px;
          padding: 0 15px;
          margin-top: 7px;
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
    }
  `,
};
