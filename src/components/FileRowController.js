import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Icon from "./Icon";
import FileRow from "./FileRow";

const FileName = styled.span`
  padding-left: 0.5rem;
`;

const getFileType = (name) => {
  const arr = name.split(".");
  const ext = arr.length === 1 ? "folder" : arr[arr.length - 1];
  return ext;
};

const FileRow = ({ name, nestLevel, renameFile = false }) => {
  let type = getFileType(name);
  if (type === "folder") {
    type = "open-folder";
  }

  console.log("re-render");

  const [filename, setFilename] = useState(name);
  const [isRename, setIsRename] = useState(renameFile);
  const [isHover, setIsHover] = useState(false);

  return (
    <FileRow nestLevel={nestLevel}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon type={type} styles={{ display: "inline" }} />
        {!isRename && <FileName>{filename}</FileName>}
        {isRename && (
          <StyledInput
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
        )}
      </div>
      <div>{isHover && !isRename && <button>rename</button>}</div>
    </FileRow>
  );
};

export default FileRow;
