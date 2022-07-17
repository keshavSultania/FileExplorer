import React from "react";
import styled, { css } from "styled-components";

const extensionToIconNameMap = {
  js: "javascript",
  jpeg: "image",
  jpg: "image",
  css: "css",
  less: "less",
  scss: "scss",
  json: "json"
};

const IconImage = styled.div`
  background-size: 16px;
  background-position: 0px center;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  display: inline-block;
  vertical-align: top;
  flex-shrink: 0;
  ${({ iconUrl }) => css`
    background-image: url(${iconUrl});
  `}
`;
const generateIconUrl = (type) => {
  if (type === "open-folder")
    return `https://codesandbox.io/static/media/folderOpen.6913563c.svg`;
  if (type === "closed-folder")
    return "https://codesandbox.io/static/media/folder.31ca7ee0.svg";

  const keyword = extensionToIconNameMap[type] || "file";
  return `https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/${keyword}.svg`;
};

const FileIcon = ({ type }) => {
  const iconUrl = generateIconUrl(type);
  return (
    <>
      <IconImage iconUrl={iconUrl} />
    </>
  );
};

export default FileIcon;
