import * as React from "react"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import * as styles from "./programs.module.css"
import Row from "../components/row"
import Columns from "../components/columns"
import { Trans } from "@lingui/macro"

const Programs = ({ data, programs }) => {
  return (
    <Row
      backgroundImageData={data.programBackgroundImage.localFile}
      backgroundImageAlt="istanbul streets"
      backgroundImageOverlayClass={styles.programsOverlay}
      rowClass={styles.programsRow}
      rowContainerClass={styles.programsRowContainer}
    >
      <Columns>
        <h2 id="programs">
          <Trans>Our Programs</Trans>
        </h2>
        <Row>
          <Columns columnsClass={styles.programsColumns}>
            {programs.map(program => {
              const programPhoto = getImage(
                program.featuredImage.node.localFile
              )
              return (
                <div key={program.id} className={styles.program}>
                  <div className={styles.programPhoto}>
                    <GatsbyImage image={programPhoto} alt={program.title} />
                  </div>
                  <div>
                    <div className={styles.programBody}>
                      <h3>{program.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{ __html: program.content }}
                      ></div>
                      <Link to={program.programButton.buttonLink}>
                        {program.programButton.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </Columns>
        </Row>
      </Columns>
    </Row>
  )
}

export default Programs
