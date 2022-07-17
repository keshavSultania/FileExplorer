import React from "react";
import styled from "styled-components";
import { useContextMenu } from "../hooks/useContextMenu";

const MenuContainer = styled.div`
  background: black;
  z-index: 1;
  position: absolute;
  height: 100px;
  width: 150px;
  color: white;
`;

const ContextMenu = ({ menu, xPos, yPos }) => {
  // const { xPos, yPos, showMenu } = useContextMenu();
  return (
    <>
      <MenuContainer
        className="menu-container"
        style={{
          top: yPos,
          left: xPos
          // opacity: interpolatedStyle.opacity
        }}
      >
        {menu}
      </MenuContainer>
    </>
  );
};

export default ContextMenu;
