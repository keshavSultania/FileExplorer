import React, { useEffect, useRef, useState } from "react";
import FolderSection from "./FolderSection";
import FileRow from "./FileRow";
import styled from "styled-components";
import ContextMenu from "./ContextMenu";

const Wrapper = styled.div`
  /* background-color: rgb(52, 52, 52); */
  /* background-color: rgb(4, 4, 4); */
  background-color: #151515;
  height: auto;
  width: 300px;
  padding: 4px;
  border: 1px solid grey;
`;

const api = [
  {
    type: "folder",
    name: "public",
    children: [
      {
        type: "folder",
        name: "image",
        children: [
          {
            type: "file",
            name: "diamond.jpeg"
          },
          {
            type: "file",
            name: "ring.jpg"
          }
        ]
      }
    ]
  },
  {
    type: "folder",
    name: "src",
    children: [
      {
        type: "folder",
        name: "components",
        children: [
          {
            type: "file",
            name: "FileRow.js"
          },
          {
            type: "file",
            name: "Header.js"
          },
          {
            type: "file",
            name: "Footer.js"
          },
          {
            type: "file",
            name: "Login.js"
          }
        ]
      },
      {
        name: "css",
        type: "folder",
        children: [
          {
            type: "file",
            name: "styles.css"
          },
          {
            type: "file",
            name: "header.css"
          }
        ]
      },
      {
        type: "file",
        name: "App.js"
      },
      {
        type: "file",
        name: "index.js"
      }
    ]
  }
];

const FileViewer = () => {
  console.log("render FileViewer");

  const FileViewerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");

  // useEffect(() => {
  //   const element = document.getElementById("file-list");
  //   element.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //   });
  // }, []);

  // useEffect(() => {
  //   if (FileViewerRef && FileViewerRef.FileViewerRef) {
  //     FileViewerRef.current.addEventListener("contextmenu", (e) => {
  //       e.preventDefault();
  //       console.log("clicked context");
  //       setXPos(`${e.pageX}px`);
  //       setYPos(`${e.pageY}px`);
  //       setShowMenu(true);
  //     });
  //   }
  // }, []);
  return (
    <Wrapper id="file-list" ref={FileViewerRef}>
      {/* <FileRow type="file" name="test.js" /> */}
      {api.map((entry) => {
        return <FolderSection data={entry} />;
      })}
      {/* {showMenu && (
        <ContextMenu xPos={xPos} yPos={yPos} menu={<MenuComponent />} />
      )} */}
    </Wrapper>
  );
};

export default FileViewer;
