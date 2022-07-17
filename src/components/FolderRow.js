import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import FileRow from "./FileRow";

const FileRowContainer = styled.li`
  background-color: rgb(52, 52, 52);
  height: auto;
  width: 100%;
  color: rgb(153, 153, 153);
  display: inline-block;
`;

const FolderName = styled.span`
  padding-left: 0.5rem;
`;

const FolderRow = ({ type, name, ...args }) => {
  return (
    <FileRowContainer>
      <FileRow {...args} />
    </FileRowContainer>
  );
};

export default FolderRow;
