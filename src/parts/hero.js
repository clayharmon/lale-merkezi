import * as React from "react"
import { LocalizedLink as Link } from "gatsby-theme-i18n"

import * as styles from "./hero.module.css"
import Row from "../components/row"
import Columns from "../components/columns"

const Hero = ({ data }) => (
  <Row
    backgroundImageData={data.backgroundimage.localFile}
    backgroundImageAlt="istanbul"
    rowClass={styles.heroRow}
    backgroundImageOverlayClass={styles.heroOverlay}
  >
    <Columns columnsClass={styles.heroColumns}>
      <div>
        <h2>{data.headline1}</h2>
        <h3>{data.headline2}</h3>
        <div className={styles.buttonGroup}>
          <Link className={styles.buttonUnderline} to={data.button1Url}>
            <span>{data.button1Text}</span>
          </Link>
          <Link className={styles.buttonHighlight} to={data.button2Url}>
            <span>{data.button2Text}</span>
          </Link>
        </div>
      </div>
    </Columns>
  </Row>
)

export default Hero
