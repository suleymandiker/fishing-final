import React, { FunctionComponent, useContext } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import Logo from "../public/media/logo.webp";
import { GlobalContext } from "../context/GlobalContext";
import ActiveLink from "./global/ActiveLink";

const NavMobil: FunctionComponent = () => {
  const { langs, locale, openMobilMenu, setContext } =
    useContext(GlobalContext);
  // const [openMobilMenu, setMobilMenu] = useState(false);

  const menu = [
    { title: "Home", url: "" },
    { title: "Mint", url: "mint" },
    { title: "Market", url: "market" },
    { title: "Wallet", url: "wallet" },
    { title: "Fishing", url: "fishing" },
    { title: "Leaderboard", url: "leaderboard" },
  ];

  return (
    <div
      css={styles.nav_mobil_con}
      className={openMobilMenu ? "open_menu" : "close_menu"}
    >
      <ActiveLink activeClassName="active" href={"/"}>
        <figure>
          <Image src={Logo} layout="responsive" alt="Fishing Logo" />
        </figure>
      </ActiveLink>

      <button
        className={
          openMobilMenu ? "btn-mobil_menu close_icon" : "btn-mobil_menu"
        }
        onClick={() => {
          setContext("openMobilMenu", !openMobilMenu);
        }}
      >
        <span className="one_line"></span>
        <span className="two_line"></span>
        <span className="three_line"></span>
      </button>
      <nav className="max">
        <ul>
          <li className="line"></li>
          {menu?.length > 0 &&
            menu.map((item: any, index: number) => (
              <li key={index} title={item.title}>
                <ActiveLink activeClassName="active" href={"/" + item.url}>
                  <a>{item.title}</a>
                </ActiveLink>
              </li>
            ))}

          <li className="menu_btn" onClick={() => alert("....")}>
            NFClub
          </li>
          <li className="menu_btn" onClick={() => alert("....")}>
            + Connect Wallet
          </li>
          {/* <li>Langs</li> */}
          <div className="langs flex f-wrap gap-10">
            {langs?.length > 0 &&
              langs.map((item: any, index: number) => (
                <li key={index}>
                  <a href={"/" + item.code}>
                    <img
                      className={
                        locale == item.code
                          ? "lang lang_active"
                          : "lang lang_inactive"
                      }
                      src={"../media/lang-" + item.code + ".webp"}
                      width={35}
                      height={35}
                      alt="Fishing"
                    />
                  </a>
                </li>
              ))}
          </div>
        </ul>
        <div></div>
      </nav>
    </div>
  );
};

export default NavMobil;

const styles = {
  nav_mobil_con: css`
    position: absolute;
    width: 100%;
    height: auto;
    z-index: 9999;
    figure {
      position: absolute;
      display: block;
      width: 100%;
      max-width: 120px;
      top: 15px;
      left: 20px;
    }
    .btn-mobil_menu {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 20px;
      right: 20px;
      background-size: 32px auto;
      transition: background 0.3s;
      z-index: 9999;

      span {
        position: absolute;
        width: 100%;
        left: 0;
        border: 1px solid var(--white);
        border-radius: 20px;
        transform-origin: center;
        transition: 0.5s;
      }

      .one_line {
        top: 0;
      }
      .two_line {
        top: 10px;
      }
      .three_line {
        top: 20px;
      }
    }
    .close_icon {
      span {
        position: absolute;
        width: 100%;
        border: 1px solid var(--white);
      }

      .one_line {
        top: 10px;
        transform: rotate(-50deg);
      }
      .two_line {
        transform: scale(0);
        border-color: transparent;
      }
      .three_line {
        top: 10px;
        transform: rotate(50deg);
      }
    }
    nav {
      ul {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
        gap: 20px;
        background: var(--secondaryColor);
        transform-origin: top right;
        transition: 0.5s;
        .logo {
          width: 480px;
        }
        li {
          margin: 0;
          padding: 0;
          cursor: pointer;
          @media only screen and (min-width: 1900px) {
            width: 100%;
          }
          a {
            padding: 0;
            font-size: 18px;
            cursor: pointer;
          }
          .active {
            color: var(--primaryColor);
            border-color: var(--primaryColor);
            text-shadow: white 0 0 1px, var(--secondaryColor) 0 1px 1px,
              var(--secondaryColor) 0 4px 1px;
          }
        }
        .langs {
          a {
            .lang {
              padding: 3px;
              cursor: pointer;
              transition: border opacity 0.3s;
              &.lang_active {
                border: 1px solid #957778;
                border-radius: 50%;
              }
              &.lang_inactive {
                opacity: 0.5;
                transition: opacity 0.3s;
              }
            }
            &:hover {
              .lang {
                &.lang_inactive {
                  opacity: 1;
                }
              }
            }
          }
        }
        .menu_btn {
          margin: 0;
          font-size: 20px;
          color: #ffabb5;
        }
        .menu_btns {
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
      }
    }
    &.open_menu {
      height: 30px;
      nav {
        ul {
          transform: scale(1) translate(0, 0);
          border-radius: 0;
          right: 0;
        }
      }
    }
    &.close_menu {
      height: 0;
      nav {
        pointer-events: none;
        ul {
          transform: scale(0) translate(100%, -100%);
          border-radius: 100%;
        }
      }
    }
  `,
};
