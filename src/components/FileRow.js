import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components";
import FileIcon from "./FileIcon";
import Icon from "./Icon";
import ContextMenu from "./ContextMenu";

const FileRowContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: space-between;
  height: auto;
  width: 100%;
  color: rgb(153, 153, 153);
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
  ${({ nestLevel }) => css`
    padding-left: calc(${nestLevel}rem + 3px);
  `}
  &:hover {
    color: white;
    background-color: rgb(52, 52, 52);
  }
`;

const StyledInput = styled.input`
  background: inherit;
  border: 1px solid black;
  padding: 2px;
  margin-left: 4px;
  color: white;
  outline: none;
  font-size: inherit;
`;

const FileName = styled.span`
  padding-left: 0.5rem;
`;

const getFileType = (name) => {
  const arr = name.split(".");
  const ext = arr.length === 1 ? "folder" : arr[arr.length - 1];
  return ext;
};

const FileRow = ({ name, nestLevel = 0, isExpanded = false }) => {
  const ref = useRef();
  const [filename, setFilename] = useState(name);
  const [isRename, setIsRename] = useState(false);
  const [isHover, setIsHover] = useState(false);
  let type = getFileType(filename);
  if (type === "folder") {
    type = isExpanded ? "open-folder" : "closed-folder";
  }

  const handleHover = () => {
    setIsHover((prev) => {
      return !prev;
    });
  };

  const handleRenameClick = (e) => {
    e.stopPropagation();
    setIsRename((prev) => !prev);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRenameClick(e);
    }
  };

  return (
    <>
      <FileRowContainer
        ref={ref}
        nestLevel={nestLevel}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}
      >
        <div
          style={{ display: "flex", alignItems: "center", overflow: "hidden" }}
        >
          <FileIcon type={type} styles={{ display: "inline" }} />
          {!isRename && <FileName>{filename}</FileName>}
          {isRename && (
            <StyledInput
              value={filename}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => setFilename(e.target.value)}
              onKeyPress={handleInputKeyPress}
            />
          )}
        </div>
        {isHover && !isRename && (
          <Icon color={"#999999"} onClick={handleRenameClick} type="edit" />
        )}
      </FileRowContainer>
    </>
  );
};

export default FileRow;
