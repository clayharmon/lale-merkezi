import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import * as styles from "./row-bg-image.module.css"

const RowBgImage = ({
  backgroundImageData,
  backgroundImageAlt,
  backgroundImageContainerClass = "",
  backgroundImageOverlayClass = "",
  backgroundImageClass = "",
}) => {
  const image = getImage(backgroundImageData)
  return (
    <div
      className={`${styles.rowBgImageContainer} ${backgroundImageContainerClass}`}
    >
      <div
        className={`${styles.rowBgImageOverlay} ${backgroundImageOverlayClass}`}
      ></div>
      <GatsbyImage
        className={`${styles.rowBgImage} ${backgroundImageClass}`}
        image={image}
        alt={backgroundImageAlt}
      />
    </div>
  )
}

export default RowBgImage
