import * as React from "react"
import RowBgImage from "./row-bg-image"
import * as styles from "./row.module.css"

const Row = ({
  children,
  rowClass = "",
  rowContainerClass = "",
  backgroundImageData,
  backgroundImageAlt,
  backgroundImageContainerClass = "",
  backgroundImageOverlayClass = "",
  backgroundImageClass = "",
}) => {
  return (
    <div className={`${styles.row} ${rowClass}`}>
      {backgroundImageData ? (
        <RowBgImage
          backgroundImageData={backgroundImageData}
          backgroundImageAlt={backgroundImageAlt}
          backgroundImageContainerClass={backgroundImageContainerClass}
          backgroundImageOverlayClass={backgroundImageOverlayClass}
          backgroundImageClass={backgroundImageClass}
        />
      ) : null}
      <div className={`${styles.rowContainer} ${rowContainerClass}`}>
        {children}
      </div>
    </div>
  )
}

export default Row
