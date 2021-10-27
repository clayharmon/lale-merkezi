import * as React from "react"

import * as styles from "./contact.module.css"
import Row from "../components/row"
import Columns from "../components/columns"
import {
  FaFacebook,
  FaInstagram,
  FaPhoneSquareAlt,
  FaWhatsapp,
} from "react-icons/fa"
import LeadForm from "../forms/lead/lead-form"
import { Trans } from "@lingui/macro"

const Contact = () => (
  <Row rowClass={styles.contactRow}>
    <Columns columnsClass={styles.contactColumns}>
      <div className={styles.leftColumn}>
        <h2 id="contact">
          <Trans>Get In Touch</Trans>
        </h2>
        <div className={styles.contactItems}>
          <ul>
            <li dir="ltr">
              <a href="tel:905528422776">
                <FaWhatsapp />
                <span>+90 552 842 2776</span>
              </a>
            </li>
            <li dir="ltr">
              <a href="tel:902124520809">
                <FaPhoneSquareAlt />
                <span>+90 212 452 08 09</span>
              </a>
            </li>
            <li dir="ltr">
              <a
                href="https://www.instagram.com/LaleMerkeziIstanbul/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
                <span>@lalemerkeziistanbul</span>
              </a>
            </li>
            <li dir="ltr">
              <a
                href="https://www.facebook.com/LaleMerkeziIstanbul/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
                <span>/lalemerkeziistanbul</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <LeadForm />
      </div>
    </Columns>
  </Row>
)

export default Contact
