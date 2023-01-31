import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="141" cy="156" r="130" />
    <rect x="8" y="315" rx="0" ry="0" width="283" height="49" />
    <rect x="220" y="336" rx="0" ry="0" width="4" height="13" />
    <rect x="7" y="377" rx="0" ry="0" width="281" height="90" />
  </ContentLoader>
);

// export default MyLoader
