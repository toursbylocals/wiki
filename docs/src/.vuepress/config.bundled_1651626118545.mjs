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
  const _path = path.join("/Users/edivansilva/Documents/dev/wiki/docs/src/utils", "..", `/${urlPath}/`);
  function normalizeFileNames(files2) {
    return files2.map((file) => {
      const _file = file.replace(/\.md$/, "");
      if (_file === "README") {
        return "";
      }
      return _file;
    });
  }
  const files = [
    ...normalizeFileNames(fs.readdirSync(_path)),
    ...normalizeFileNames(fs.readdirSync(_path)),
    ...normalizeFileNames(fs.readdirSync(_path))
  ];
  const sidebar = [
    {
      title: projectName,
      collapsable: false,
      sidebarDepth: 2,
      children: files
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
        deploy: "./scripts/deploy.sh"
      },
      license: "MIT",
      devDependencies: {
        vuepress: "^1.5.3"
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
          "/guide/": [
            {
              title: "Guide",
              collapsable: true,
              children: [""]
            }
          ]
        }
      },
      base: "/wiki/",
      plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
    };
  }
});
export default require_config();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL2luZGV4LnRzIiwgInNyYy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgU2lkZWJhckNvbmZpZ0FycmF5IH0gZnJvbSBcInZ1ZXByZXNzL2NvbmZpZ1wiO1xuXG4vLyBmcy5yZWFkZGlyU3luYyh0ZXN0Rm9sZGVyKS5mb3JFYWNoKGZpbGUgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhmaWxlKTtcbi8vIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhZmZvbGRQcm9qZWN0KFxuICB1cmxQYXRoOiBzdHJpbmcsXG4gIHByb2plY3ROYW1lOiBzdHJpbmdcbik6IFNpZGViYXJDb25maWdBcnJheSB7XG4gIGNvbnN0IF9wYXRoID0gcGF0aC5qb2luKFwiL1VzZXJzL2VkaXZhbnNpbHZhL0RvY3VtZW50cy9kZXYvd2lraS9kb2NzL3NyYy91dGlsc1wiLCBcIi4uXCIsIGAvJHt1cmxQYXRofS9gKTtcblxuICBmdW5jdGlvbiBub3JtYWxpemVGaWxlTmFtZXMoZmlsZXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgX2ZpbGUgPSBmaWxlLnJlcGxhY2UoL1xcLm1kJC8sIFwiXCIpO1xuXG4gICAgICBpZiAoX2ZpbGUgPT09IFwiUkVBRE1FXCIpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZmlsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGZpbGVzID0gW1xuICAgIC4uLm5vcm1hbGl6ZUZpbGVOYW1lcyhmcy5yZWFkZGlyU3luYyhfcGF0aCkpLFxuICAgIC4uLm5vcm1hbGl6ZUZpbGVOYW1lcyhmcy5yZWFkZGlyU3luYyhfcGF0aCkpLFxuICAgIC4uLm5vcm1hbGl6ZUZpbGVOYW1lcyhmcy5yZWFkZGlyU3luYyhfcGF0aCkpLFxuICBdO1xuXG4gIC8vY29uc29sZS5sb2coYCR7dXJsUGF0aH06YCwgZmlsZXMpO1xuXG4gIGNvbnN0IHNpZGViYXIgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IHByb2plY3ROYW1lLFxuICAgICAgY29sbGFwc2FibGU6IGZhbHNlLFxuICAgICAgc2lkZWJhckRlcHRoOiAyLFxuICAgICAgY2hpbGRyZW46IGZpbGVzLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc29sZS5sb2coc2lkZWJhcik7XG5cbiAgcmV0dXJuIHNpZGViYXI7XG59XG4iLCAiY29uc3QgeyBkZXNjcmlwdGlvbiB9ID0gcmVxdWlyZShcIi4uLy4uL3BhY2thZ2VcIik7XG5pbXBvcnQgeyBzY2FmZm9sZFByb2plY3QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKlxuICAgKiBSZWZcdUZGMUFodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9jb25maWcvI3RpdGxlXG4gICAqL1xuICB0aXRsZTogXCJUb3Vyc0J5TG9jYWxzXCIsXG4gIC8qKlxuICAgKiBSZWZcdUZGMUFodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9jb25maWcvI2Rlc2NyaXB0aW9uXG4gICAqL1xuICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cbiAgLyoqXG4gICAqIEV4dHJhIHRhZ3MgdG8gYmUgaW5qZWN0ZWQgdG8gdGhlIHBhZ2UgSFRNTCBgPGhlYWQ+YFxuICAgKlxuICAgKiByZWZcdUZGMUFodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy9jb25maWcvI2hlYWRcbiAgICovXG4gIGhlYWQ6IFtcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJ0aGVtZS1jb2xvclwiLCBjb250ZW50OiBcIiMzZWFmN2NcIiB9XSxcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIsIGNvbnRlbnQ6IFwieWVzXCIgfV0sXG4gICAgW1xuICAgICAgXCJtZXRhXCIsXG4gICAgICB7IG5hbWU6IFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiLCBjb250ZW50OiBcImJsYWNrXCIgfSxcbiAgICBdLFxuICBdLFxuXG4gIC8qKlxuICAgKiBUaGVtZSBjb25maWd1cmF0aW9uLCBoZXJlIGlzIHRoZSBkZWZhdWx0IHRoZW1lIGNvbmZpZ3VyYXRpb24gZm9yIFZ1ZVByZXNzLlxuICAgKlxuICAgKiByZWZcdUZGMUFodHRwczovL3YxLnZ1ZXByZXNzLnZ1ZWpzLm9yZy90aGVtZS9kZWZhdWx0LXRoZW1lLWNvbmZpZy5odG1sXG4gICAqL1xuICB0aGVtZUNvbmZpZzoge1xuICAgIHJlcG86IFwiXCIsXG4gICAgZWRpdExpbmtzOiBmYWxzZSxcbiAgICBkb2NzRGlyOiBcIlwiLFxuICAgIGVkaXRMaW5rVGV4dDogXCJcIixcbiAgICBsYXN0VXBkYXRlZDogZmFsc2UsXG4gICAgbmF2OiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiR3VpZGVcIixcbiAgICAgICAgbGluazogXCIvZ3VpZGUvXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlByb2R1Y3RcIixcbiAgICAgICAgbGluazogXCIvcHJvZHVjdC9cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiUHJvamVjdHNcIixcbiAgICAgICAgYXJpYUxhYmVsOiBcIkNvbXBhbmllcydzIHByb2plY3RzJ1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogXCJNeVRyaXBKb3VybmFsXCIsIGxpbms6IFwiL210ai9cIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJUb3Vyc0J5TG9jYWxzXCIsIGxpbms6IFwiL3RibC9cIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJHaXRodWJcIixcbiAgICAgICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdG91cnNieWxvY2Fsc1wiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNpZGViYXI6IHtcbiAgICAgIFwiL210ai9cIjogc2NhZmZvbGRQcm9qZWN0KFwibXRqXCIsIFwiTXlUcmlwSm91cm5hbFwiKSxcbiAgICAgIFwiL3RibC9cIjogc2NhZmZvbGRQcm9qZWN0KFwidGJsXCIsIFwiVG91cnNCeUxvY2Fsc1wiKSxcbiAgICAgIFwiL2d1aWRlL1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCJHdWlkZVwiLFxuICAgICAgICAgIGNvbGxhcHNhYmxlOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJcIl0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgLy8gXCIvQnVzaW5lc3MvXCI6IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHRpdGxlOiBcIlVJL1VYXCIsXG4gICAgICAvLyAgICAgY29sbGFwc2FibGU6IGZhbHNlLFxuICAgICAgLy8gICAgIGNoaWxkcmVuOiBbXCJcIiwgXCJ1c2luZy12dWVcIiwgXCJteS10cmlwLWpvdXJuYWxcIl0sXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyBdLFxuICAgIH0sXG4gIH0sXG4gIGJhc2U6IFwiL3dpa2kvXCIsXG4gIC8qKlxuICAgKiBBcHBseSBwbHVnaW5zXHVGRjBDcmVmXHVGRjFBaHR0cHM6Ly92MS52dWVwcmVzcy52dWVqcy5vcmcvemgvcGx1Z2luL1xuICAgKi9cbiAgcGx1Z2luczogW1wiQHZ1ZXByZXNzL3BsdWdpbi1iYWNrLXRvLXRvcFwiLCBcIkB2dWVwcmVzcy9wbHVnaW4tbWVkaXVtLXpvb21cIl0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9PLHlCQUNMLFNBQ0EsYUFDb0I7QUFDcEIsUUFBTSxRQUFRLEtBQUssS0FBSyx3REFBd0QsTUFBTSxJQUFJO0FBRTFGLDhCQUE0QixRQUFpQjtBQUMzQyxXQUFPLE9BQU0sSUFBSSxDQUFDLFNBQVM7QUFDekIsWUFBTSxRQUFRLEtBQUssUUFBUSxTQUFTO0FBRXBDLFVBQUksVUFBVSxVQUFVO0FBQ3RCLGVBQU87QUFBQTtBQUdULGFBQU87QUFBQTtBQUFBO0FBSVgsUUFBTSxRQUFRO0FBQUEsSUFDWixHQUFHLG1CQUFtQixHQUFHLFlBQVk7QUFBQSxJQUNyQyxHQUFHLG1CQUFtQixHQUFHLFlBQVk7QUFBQSxJQUNyQyxHQUFHLG1CQUFtQixHQUFHLFlBQVk7QUFBQTtBQUt2QyxRQUFNLFVBQVU7QUFBQSxJQUNkO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsTUFDYixjQUFjO0FBQUEsTUFDZCxVQUFVO0FBQUE7QUFBQTtBQUlkLFVBQVEsSUFBSTtBQUVaLFNBQU87QUFBQTtBQTdDVDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQURBLFFBQU0sRUFBRSxnQkFBZ0I7QUFHeEIsV0FBTyxVQUFVO0FBQUEsTUFJZixPQUFPO0FBQUEsTUFJUDtBQUFBLE1BT0EsTUFBTTtBQUFBLFFBQ0osQ0FBQyxRQUFRLEVBQUUsTUFBTSxlQUFlLFNBQVM7QUFBQSxRQUN6QyxDQUFDLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxTQUFTO0FBQUEsUUFDMUQ7QUFBQSxVQUNFO0FBQUEsVUFDQSxFQUFFLE1BQU0seUNBQXlDLFNBQVM7QUFBQTtBQUFBO0FBQUEsTUFTOUQsYUFBYTtBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1QsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFFBQ2IsS0FBSztBQUFBLFVBQ0g7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQTtBQUFBLFVBRVI7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFdBQVc7QUFBQSxZQUNYLE9BQU87QUFBQSxjQUNMLEVBQUUsTUFBTSxpQkFBaUIsTUFBTTtBQUFBLGNBQy9CLEVBQUUsTUFBTSxpQkFBaUIsTUFBTTtBQUFBO0FBQUE7QUFBQSxVQUduQztBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBO0FBQUE7QUFBQSxRQUdWLFNBQVM7QUFBQSxVQUNQLFNBQVMsZ0JBQWdCLE9BQU87QUFBQSxVQUNoQyxTQUFTLGdCQUFnQixPQUFPO0FBQUEsVUFDaEMsV0FBVztBQUFBLFlBQ1Q7QUFBQSxjQUNFLE9BQU87QUFBQSxjQUNQLGFBQWE7QUFBQSxjQUNiLFVBQVUsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFZbkIsTUFBTTtBQUFBLE1BSU4sU0FBUyxDQUFDLGdDQUFnQztBQUFBO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
