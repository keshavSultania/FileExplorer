import { useState } from "react";
import FileRow from "./FileRow";

const FolderExpander = ({ children, ...args }) => {
  const [expand, setExpand] = useState(true);
  // console.log("children", children);

  const handleExpandAndCollapse = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div>
      <div onClick={handleExpandAndCollapse}>
        <FileRow {...args} isExpanded={expand} />
      </div>
      {expand && children}
    </div>
  );
};

export default FolderExpander;
