import React from "react";
//https://codesandbox.io/s/ryy418r5km?from-embed
//https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91


// const getPath = (name) => {
const getPath = (name) => {
  switch (name) {
    case "appservice":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216">
            <g fill="#106ebe" stroke-width="0">
                <polygon points="49.35 167.38 216 167.4 126.24 11.83 98.9 86.94 151.4 149.39 49.35 167.38"/>
                <polygon points="119.08 0 54.94 53.83 0 148.98 49.55 148.98 49.55 149.13 119.08 0"/>
            </g>
        </svg>
      );
      case "jackie":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 216">
            <g fill="#106ebe" stroke-width="0">
                <polygon points="49.35 167.38 216 167.4 126.24 11.83 98.9 86.94 151.4 149.39 49.35 167.38"/>
                <polygon points="119.08 0 54.94 53.83 0 148.98 49.55 148.98 49.55 149.13 119.08 0"/>
            </g>
        </svg>
      );
    default:
      return <test />;
  }
};

const SVGIcon = ({}) => (
    getPath()
    //getPath({name})
    //{getPath(name)}
);

export default SVGIcon;
//export default getPath;
