import * as React from "react"

import * as styles from "./about.module.css"
import Row from "../components/row"
import Columns from "../components/columns"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const About = ({ data, teachers }) => {
  const image = getImage(data.image.localFile)
  return (
    <Row rowClass={styles.aboutRow}>
      <Columns columnsClass={styles.aboutColumns}>
        <div className={styles.imageColumn}>
          <GatsbyImage image={image} alt={data.headline} />
        </div>
        <div className={styles.textColumn} id="about">
          <h2>{data.headline}</h2>
          <div
            className={styles.textBody}
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>
          <div className={styles.team}>
            {teachers.map(teacher => {
              const teacherPhoto = getImage(
                teacher.featuredImage.node.localFile
              )
              return (
                <div className={styles.teacher} key={teacher.id}>
                  <GatsbyImage image={teacherPhoto} alt={teacher.title} />
                  <p>{teacher.title}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Columns>
    </Row>
  )
}

export default About
