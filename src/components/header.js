import * as React from "react"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import * as styles from "./header.module.css"
import LogoIcon from "../images/logo-icon.svg"
import LogoText from "../images/logo-text.svg"
import Language from "./language"
import MobileMenu from "./mobile-menu"

const Header = ({ menuData }) => {
  const menuItems = menuData.menuItems.nodes

  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsScrolled(window.scrollY > 0)
      window.addEventListener("scroll", () => setIsScrolled(window.scrollY > 0))
    }
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <LogoIcon />
        </div>
        <div className={styles.logoText}>
          <LogoText />
        </div>
      </Link>
      <div className={styles.mainNavContainer}>
        <nav className={styles.mainNav}>
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <Link to={item.url}>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.focus}>
        <Language isScrolled={isScrolled} />
        <MobileMenu menuItems={menuItems} isScrolled={isScrolled} />
      </div>
    </header>
  )
}

export default Header
