import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <circle cx="125" cy="125" r="125" /> 
    <rect x="0" y="287" rx="10" ry="10" width="279" height="27" /> 
    <rect x="7" y="330" rx="24" ry="24" width="282" height="79" /> 
    <rect x="125" y="422" rx="14" ry="14" width="151" height="44" /> 
    <rect x="15" y="431" rx="9" ry="9" width="88" height="27" />
  </ContentLoader>
)

export default Skeleton