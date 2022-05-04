import fs from "fs";
import path from "path";
import { SidebarConfigArray } from "vuepress/config";

// fs.readdirSync(testFolder).forEach(file => {
//   console.log(file);
// });

export function scaffoldProject(urlPath: string, projectName: string) {
  const _path = path.join(__dirname, "..", `/${urlPath}/`);

  function normalizeFileNames(files: string[]) {
    return files.map((file) => {
      const _file = file.replace(/\.md$/, "");

      if (_file === "README") {
        return "";
      }

      return {
        title: _file,
        sidebarDepth: 2,
        collapsable: true,
        children: [_file],
      };
    });
  }

  const sidebar = [
    {
      title: projectName,
      collapsable: false,
      children: normalizeFileNames(fs.readdirSync(_path)),
    },
  ];

  console.log(sidebar);

  return sidebar;
}
