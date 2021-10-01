import * as React from "react"
import * as styles from "./columns.module.css"

const Columns = ({ children, columnsClass = "" }) => {
  return <div className={`${styles.columns} ${columnsClass}`}>{children}</div>
}

export default Columns
