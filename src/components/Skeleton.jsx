import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={600}
    height={100}
    viewBox="0 0 600 100"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="45" cy="36" r="34" /> 
    <rect x="95" y="23" rx="0" ry="0" width="155" height="9" /> 
    <rect x="94" y="48" rx="0" ry="0" width="156" height="9" /> 
    <rect x="159" y="44" rx="0" ry="0" width="8" height="0" /> 
    <rect x="445" y="22" rx="0" ry="0" width="147" height="9" /> 
    <rect x="446" y="43" rx="0" ry="0" width="53" height="10" /> 
    <rect x="286" y="17" rx="0" ry="0" width="5" height="3" />
  </ContentLoader>
)

export default MyLoader