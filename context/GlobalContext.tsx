import React, { createContext } from "react";
import cookie from "js-cookie";
import router, { Router } from "next/router";

export const GlobalContext = createContext<any | null>(null);

type Props = {
  innerWidth: number;
  scrollPos: number;
};

class GlobalContextProvider extends React.Component<Props> {
  async componentDidUpdate() {
    if (this.props.innerWidth != this.state.innerWidth) {
      this.setState({ innerWidth: this.props.innerWidth });
    }
    if (this.props.scrollPos != this.state.scrollPos) {
      this.setState({ scrollPos: this.props.scrollPos });
    }

    Router.events.on("routeChangeStart", () => {
      //clearAnimate()
      this.setContext("loading", true);
    });
    Router.events.on("routeChangeComplete", (page) => {
      //setAnimate()
      this.setContext("loading", false);
      this.setContext("openMobilMenu", false);
      page = page.substring(1);
      //setContext('view', page)
    });
  }

  async componentDidMount() {
    const theme = cookie.get("theme") || "lightTheme";
    this.changeTheme(theme);
    this.setState({ locale: router.locale });

    if (router.locale) {
      let local = require("../locales/" + router.locale + "/local.json");
      local && this.setState({ local });
    }
    let social_links = require("../locales/social-links.json");
    social_links && this.setState({ social_links });

    let user = require("../locales/user.json");
    user && this.setState({ user });
  }

  setContext = (keyOrObject: any, value?: any) => {
    if (keyOrObject instanceof Object) {
      this.setState({ ...this.state, ...keyOrObject });
    } else {
      this.setState({ [keyOrObject]: value });
    }
  };

  playYoutubeVideo = () => {
    this.setContext("modalVideo", { isShow: true });
    // var playerCon = document.getElementById(classname) as HTMLDivElement;
    // playerCon.classList.add("player_con");
    var player = document.getElementById("YoutubePlayer") as HTMLIFrameElement;
    var src: any = player?.getAttribute("data-src");
    player?.setAttribute("src", src);
  };
  stopYoutubeVideo = () => {
    this.setContext("modalVideo", { isShow: false });
    var player = document.getElementById("YoutubePlayer") as HTMLIFrameElement;
    player?.setAttribute("src", "");
  };

  changeTheme = (theme: string) => {
    document.body.classList.remove(this.state.theme);
    document.body.classList.add(theme);
    this.setState({ theme });
    cookie.set("theme", theme);
  };

  state = {
    locale: "en",
    local: [],
    user: {},
    langs: [
      {
        code: "en",
      },
      {
        code: "es",
      },
      {
        code: "zh",
      },
      {
        code: "fr",
      },
    ],
    innerWidth: this.props.innerWidth,
    scrollPos: this.props.scrollPos,
    theme: "lightTheme",
    social_links: [],
    openMobilMenu: false,
    changeTheme: this.changeTheme,
    setContext: this.setContext,
    playYoutubeVideo: this.playYoutubeVideo,
    stopYoutubeVideo: this.stopYoutubeVideo,
    view: "index",
    loading: false,
    isNav: true,
    filter_show: true,
    youtube_id: "5Peo-ivmupE",
    modalVideo: { isShow: false },
  };

  render(this: any) {
    return (
      <GlobalContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
