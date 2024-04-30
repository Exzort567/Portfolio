import React from "react";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
function PortfolioItem(props) {
  const { item } = props;
  return ( 
    <ProjectCard
      imgPath={item.imgPath}
      isBlog={item.isBlog}
      title={item.title}
      description={item.description}
      ghLink={item.ghLink}
      demoLink={item.demoLink}
    />
  );
}
export default PortfolioItem;
