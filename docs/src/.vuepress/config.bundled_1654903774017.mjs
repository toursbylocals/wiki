var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/utils/index.ts
import fs from "fs";
import path from "path";
function scaffoldProject(urlPath, projectName) {
  const _path = path.join("/Users/rafaellopes/Desktop/Dev/wiki/docs/src/utils", "..", `/${urlPath}/`);
  function normalizeFileNames(files) {
    return files.map((file) => {
      const _file = file.replace(/\.md$/, "");
      if (_file === "README") {
        return "";
      }
      return {
        title: _file,
        sidebarDepth: 2,
        collapsable: true,
        children: [_file]
      };
    });
  }
  const sidebar = [
    {
      title: projectName,
      collapsable: false,
      children: normalizeFileNames(fs.readdirSync(_path))
    }
  ];
  console.log(sidebar);
  return sidebar;
}
var init_utils = __esm({
  "src/utils/index.ts"() {
  }
});

// package.json
var require_package = __commonJS({
  "package.json"(exports, module) {
    module.exports = {
      name: "wiki",
      version: "0.0.1",
      description: "Internal documentation by toursbylocals",
      main: "index.js",
      authors: {
        name: "",
        email: ""
      },
      scripts: {
        dev: "vuepress dev src",
        build: "vuepress build src",
        deploy: "./scripts/deploy.sh",
        commit: "git-cz",
        c: "yarn commit --no-verify",
        amend: "git commit --amend --no-verify --no-edit"
      },
      license: "MIT",
      devDependencies: {
        commitizen: "^4.2.4",
        "cz-conventional-changelog-emoji": "^0.1.0",
        vuepress: "^1.5.3"
      },
      config: {
        commitizen: {
          path: "cz-conventional-changelog-emoji"
        }
      }
    };
  }
});

// src/.vuepress/config.ts
var require_config = __commonJS({
  "src/.vuepress/config.ts"(exports, module) {
    init_utils();
    var { description } = require_package();
    module.exports = {
      title: "ToursByLocals",
      description,
      head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
          "meta",
          { name: "apple-mobile-web-app-status-bar-style", content: "black" }
        ]
      ],
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
            link: "/guide/"
          },
          {
            text: "Product",
            link: "/product/"
          },
          {
            text: "Projects",
            ariaLabel: "Companies's projects'",
            items: [
              { text: "MyTripJournal", link: "/mtj/" },
              { text: "ToursByLocals", link: "/tbl/" }
            ]
          },
          {
            text: "Github",
            link: "https://github.com/toursbylocals"
          }
        ],
        sidebar: {
          "/mtj/": scaffoldProject("mtj", "MyTripJournal"),
          "/tbl/": scaffoldProject("tbl", "ToursByLocals"),
          "/guide/": scaffoldProject("guide", "Guide")
        }
      },
      base: "/wiki/",
      plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
    };
  }
});
export default require_config();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL2luZGV4LnRzIiwgInNyYy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgU2lkZWJhckNvbmZpZ0FycmF5IH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuXG4vLyBmcy5yZWFkZGlyU3luYyh0ZXN0Rm9sZGVyKS5mb3JFYWNoKGZpbGUgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhmaWxlKTtcbi8vIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhZmZvbGRQcm9qZWN0KHVybFBhdGg6IHN0cmluZywgcHJvamVjdE5hbWU6IHN0cmluZykge1xuICBjb25zdCBfcGF0aCA9IHBhdGguam9pbihcIi9Vc2Vycy9yYWZhZWxsb3Blcy9EZXNrdG9wL0Rldi93aWtpL2RvY3Mvc3JjL3V0aWxzXCIsIFwiLi5cIiwgYC8ke3VybFBhdGh9L2ApO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZUZpbGVOYW1lcyhmaWxlczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gZmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBfZmlsZSA9IGZpbGUucmVwbGFjZSgvXFwubWQkLywgXCJcIik7XG5cbiAgICAgIGlmIChfZmlsZSA9PT0gXCJSRUFETUVcIikge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IF9maWxlLFxuICAgICAgICBzaWRlYmFyRGVwdGg6IDIsXG4gICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW19maWxlXSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzaWRlYmFyID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBwcm9qZWN0TmFtZSxcbiAgICAgIGNvbGxhcHNhYmxlOiBmYWxzZSxcbiAgICAgIGNoaWxkcmVuOiBub3JtYWxpemVGaWxlTmFtZXMoZnMucmVhZGRpclN5bmMoX3BhdGgpKSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnNvbGUubG9nKHNpZGViYXIpO1xuXG4gIHJldHVybiBzaWRlYmFyO1xufVxuIiwgImNvbnN0IHsgZGVzY3JpcHRpb24gfSA9IHJlcXVpcmUoXCIuLi8uLi9wYWNrYWdlXCIpO1xuaW1wb3J0IHsgc2NhZmZvbGRQcm9qZWN0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvKipcbiAgICogUmVmXHVGRjFBaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvY29uZmlnLyN0aXRsZVxuICAgKi9cbiAgdGl0bGU6IFwiVG91cnNCeUxvY2Fsc1wiLFxuICAvKipcbiAgICogUmVmXHVGRjFBaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvY29uZmlnLyNkZXNjcmlwdGlvblxuICAgKi9cbiAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXG4gIC8qKlxuICAgKiBFeHRyYSB0YWdzIHRvIGJlIGluamVjdGVkIHRvIHRoZSBwYWdlIEhUTUwgYDxoZWFkPmBcbiAgICpcbiAgICogcmVmXHVGRjFBaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvY29uZmlnLyNoZWFkXG4gICAqL1xuICBoZWFkOiBbXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwidGhlbWUtY29sb3JcIiwgY29udGVudDogXCIjM2VhZjdjXCIgfV0sXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtY2FwYWJsZVwiLCBjb250ZW50OiBcInllc1wiIH1dLFxuICAgIFtcbiAgICAgIFwibWV0YVwiLFxuICAgICAgeyBuYW1lOiBcImFwcGxlLW1vYmlsZS13ZWItYXBwLXN0YXR1cy1iYXItc3R5bGVcIiwgY29udGVudDogXCJibGFja1wiIH0sXG4gICAgXSxcbiAgXSxcblxuICAvKipcbiAgICogVGhlbWUgY29uZmlndXJhdGlvbiwgaGVyZSBpcyB0aGUgZGVmYXVsdCB0aGVtZSBjb25maWd1cmF0aW9uIGZvciBWdWVQcmVzcy5cbiAgICpcbiAgICogcmVmXHVGRjFBaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvdGhlbWUvZGVmYXVsdC10aGVtZS1jb25maWcuaHRtbFxuICAgKi9cbiAgdGhlbWVDb25maWc6IHtcbiAgICByZXBvOiBcIlwiLFxuICAgIGRpc3BsYXlBbGxIZWFkZXJzOiB0cnVlLFxuICAgIGVkaXRMaW5rczogZmFsc2UsXG4gICAgZG9jc0RpcjogXCJcIixcbiAgICBlZGl0TGlua1RleHQ6IFwiXCIsXG4gICAgbGFzdFVwZGF0ZWQ6IGZhbHNlLFxuICAgIG5hdjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkd1aWRlXCIsXG4gICAgICAgIGxpbms6IFwiL2d1aWRlL1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJQcm9kdWN0XCIsXG4gICAgICAgIGxpbms6IFwiL3Byb2R1Y3QvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlByb2plY3RzXCIsXG4gICAgICAgIGFyaWFMYWJlbDogXCJDb21wYW5pZXMncyBwcm9qZWN0cydcIixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6IFwiTXlUcmlwSm91cm5hbFwiLCBsaW5rOiBcIi9tdGovXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiVG91cnNCeUxvY2Fsc1wiLCBsaW5rOiBcIi90YmwvXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiR2l0aHViXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RvdXJzYnlsb2NhbHNcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiB7XG4gICAgICBcIi9tdGovXCI6IHNjYWZmb2xkUHJvamVjdChcIm10alwiLCBcIk15VHJpcEpvdXJuYWxcIiksXG4gICAgICBcIi90YmwvXCI6IHNjYWZmb2xkUHJvamVjdChcInRibFwiLCBcIlRvdXJzQnlMb2NhbHNcIiksXG4gICAgICBcIi9ndWlkZS9cIjogc2NhZmZvbGRQcm9qZWN0KFwiZ3VpZGVcIiwgXCJHdWlkZVwiKSBcbiAgICAgIC8vIFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHRpdGxlOiBcIkd1aWRlXCIsXG4gICAgICAvLyAgICAgY29sbGFwc2FibGU6IGZhbHNlLFxuICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXCJcIl0sXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyBdLFxuICAgICAgLy8gXCIvQnVzaW5lc3MvXCI6IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHRpdGxlOiBcIlVJL1VYXCIsXG4gICAgICAvLyAgICAgY29sbGFwc2FibGU6IGZhbHNlLFxuICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXCJcIiwgXCJ1c2luZy12dWVcIiwgXCJteS10cmlwLWpvdXJuYWxcIl0sXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyBdLFxuICAgIH0sXG4gIH0sXG4gIGJhc2U6IFwiL3dpa2kvXCIsXG4gIC8qKlxuICAgKiBBcHBseSBwbHVnaW5zXHVGRjBDcmVmXHVGRjFBaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvemgvcGx1Z2luL1xuICAgKi9cbiAgcGx1Z2luczogW1wiQHZ1ZXByZXNzL3BsdWdpbi1iYWNrLXRvLXRvcFwiLCBcIkB2dWVwcmVzcy9wbHVnaW4tbWVkaXVtLXpvb21cIl0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9PLHlCQUF5QixTQUFpQixhQUFxQjtBQUNwRSxRQUFNLFFBQVEsS0FBSyxLQUFLLHNEQUFzRCxNQUFNLElBQUk7QUFFeEYsOEJBQTRCLE9BQWlCO0FBQzNDLFdBQU8sTUFBTSxJQUFJLENBQUMsU0FBUztBQUN6QixZQUFNLFFBQVEsS0FBSyxRQUFRLFNBQVM7QUFFcEMsVUFBSSxVQUFVLFVBQVU7QUFDdEIsZUFBTztBQUFBO0FBR1QsYUFBTztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBS2pCLFFBQU0sVUFBVTtBQUFBLElBQ2Q7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxNQUNiLFVBQVUsbUJBQW1CLEdBQUcsWUFBWTtBQUFBO0FBQUE7QUFJaEQsVUFBUSxJQUFJO0FBRVosU0FBTztBQUFBO0FBdENUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQURBLFFBQU0sRUFBRSxnQkFBZ0I7QUFHeEIsV0FBTyxVQUFVO0FBQUEsTUFJZixPQUFPO0FBQUEsTUFJUDtBQUFBLE1BT0EsTUFBTTtBQUFBLFFBQ0osQ0FBQyxRQUFRLEVBQUUsTUFBTSxlQUFlLFNBQVM7QUFBQSxRQUN6QyxDQUFDLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxTQUFTO0FBQUEsUUFDMUQ7QUFBQSxVQUNFO0FBQUEsVUFDQSxFQUFFLE1BQU0seUNBQXlDLFNBQVM7QUFBQTtBQUFBO0FBQUEsTUFTOUQsYUFBYTtBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2IsS0FBSztBQUFBLFVBQ0g7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxjQUNMLEVBQUUsTUFBTSxpQkFBaUIsTUFBTTtBQUFBLGNBQy9CLEVBQUUsTUFBTSxpQkFBaUIsTUFBTTtBQUFBO0FBQUE7QUFBQSxVQUduQztBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQSxRQUdWLFNBQVM7QUFBQSxVQUNQLFNBQVMsZ0JBQWdCLE9BQU87QUFBQSxVQUNoQyxTQUFTLGdCQUFnQixPQUFPO0FBQUEsVUFDaEMsV0FBVyxnQkFBZ0IsU0FBUztBQUFBO0FBQUE7QUFBQSxNQWlCeEMsTUFBTTtBQUFBLE1BSU4sU0FBUyxDQUFDLGdDQUFnQztBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
