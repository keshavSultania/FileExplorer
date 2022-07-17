import React from "react";
import FileRow from "./FileRow";
import FolderExpander from "./FolderExpander";

const FolderSection = ({ data, nestLevel = 0 }) => {
  const { type, name, children } = data;
  let arr = [];
  // console.log("re-render folder section");

  console.log(type, name);

  if (type === "folder") {
    let sub = [];
    if (children && children.length > 0) {
      console.log("children", children);
      sub = children.map((child) => {
        console.log("child", child);
        return (
          <FolderSection
            id={`subfolder-${name}`}
            data={child}
            nestLevel={nestLevel + 1}
          />
        );
      });
    }
    console.log("subfolders", sub);
    arr.push(
      <FolderExpander name={name} nestLevel={nestLevel}>
        {sub}
      </FolderExpander>
    );
  } else {
    arr.push(<FileRow nestLevel={nestLevel} name={name} />);
  }
  console.log("final arr", arr);
  return arr;
};

export default FolderSection;
