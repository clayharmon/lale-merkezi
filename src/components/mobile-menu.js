import * as React from "react"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import * as styles from "./mobile-menu.module.css"

const MobileMenu = ({ menuItems, isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = e => {
    e.preventDefault()
    setIsOpen(true)
  }

  const handleClose = e => {
    e.preventDefault()
    setIsOpen(false)
  }
  const closeLink = e => {
    setIsOpen(false)
  }

  const handleKeyDown = e => {
    if (e.key === "Escape") {
      setIsOpen(false)
    }
  }
  return (
    <div
      className={`${styles.mobileNavContainer} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <button
        aria-label="Mobile Menu Open Toggle"
        type="button"
        className={styles.hamburger}
        onClick={handleOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        className={
          !isOpen ? styles.mobileNav : `${styles.mobileNav} ${styles.active}`
        }
      >
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <Link to={item.url} onClick={closeLink}>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          onKeyDown={handleKeyDown}
          aria-label="Mobile Menu Close Toggle"
        >
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  )
}

export default MobileMenu
