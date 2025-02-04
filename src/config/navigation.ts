export type NavigationMenuItem = {
  path: string;
  text: string;
  i18n_key: string;
  routeName: string;
  icon: string;
  showMode?: "all" | "authorized" | "unauthorized";
};

export type NavigationMenu = Array<NavigationMenuItem>;

export const mainMenu: NavigationMenu = [
  {
    path: "/",
    text: "Home",
    i18n_key: "home",
    routeName: "PageHome",
    icon: "",
    showMode: "all",
  },
  {
    path: "/about",
    text: "About",
    i18n_key: "about",
    routeName: "AboutPage",
    icon: "",
    showMode: "all",
  },
  {
    path: "/ministries",
    text: "Ministries",
    i18n_key: "ministries",
    routeName: "MinistriesPage",
    icon: "",
    showMode: "all",
  },
  {
    path: "/gallery",
    text: "Galerry",
    i18n_key: "gallery",
    routeName: "GalleryPage",
    icon: "",
    showMode: "all",
  },
  {
    path: "/news-events",
    text: "News & Events",
    i18n_key: "news_events",
    routeName: "NewsEventsPage",
    icon: "",
    showMode: "all",
  },
  // {
  //   path: "/profile",
  //   text: "Profile",
  //   i18n_key: "profile",
  //   routeName: "Profile",
  //   icon: "",
  //   showMode: "authorized",
  // },

];

export const mapperMainMenu = {
  authorized: true,
  unauthorized: false,
};

export const byAuthorized =
  (isLogged: boolean) =>
  (menuItem: NavigationMenuItem): boolean => {
    const { showMode = "all" } = menuItem;
    if (showMode === "all") return true;
    return mapperMainMenu[showMode] === isLogged;
  };
