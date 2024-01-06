const { description } = require("../../package");
import { scaffoldProject } from "../utils";

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "ToursByLocals",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    displayAllHeaders: true,
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Frontend",
        link: "/frontend/",
      },
      // {
      //   text: "Product",
      //   link: "/product/",
      // },
      {
        text: "Projects",
        ariaLabel: "Companies's projects'",
        items: [
          { text: "MyTripJournal", link: "/mtj/" },
          { text: "ToursByLocals", link: "/tbl/" },
        ],
      },
      {
        text: "Github",
        link: "https://github.com/toursbylocals",
      },
    ],
    sidebar: {
      "/mtj/": scaffoldProject("mtj", "MyTripJournal"),
      "/tbl/": scaffoldProject("tbl", "ToursByLocals"),
      "/guide/": scaffoldProject("guide", "Guide"),
      "/frontend/": scaffoldProject("frontend", "Frontend"),
      // [
      //   {
      //     title: "Guide",
      //     collapsable: false,
      //     children: [""],
      //   },
      // ],
      // "/Business/": [
      //   {
      //     title: "UI/UX",
      //     collapsable: false,
      //     children: ["", "using-vue", "my-trip-journal"],
      //   },
      // ],
    },
  },
  base: "/wiki/",
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
