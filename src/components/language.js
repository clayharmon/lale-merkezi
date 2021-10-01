import * as React from "react"
import { useLocalization, LocalizedLink as Link } from "gatsby-theme-i18n"
import * as style from "./language.module.css"
import { FaLanguage } from "react-icons/fa"

const Language = ({ isScrolled }) => {
  const { locale, config } = useLocalization()
  const [languageMenuIsOpen, setLanguageMenuIsOpen] = React.useState(false)

  const languageBtnClick = e => {
    e.preventDefault()
    setLanguageMenuIsOpen(true)
  }

  const languageSectionLeave = e => {
    e.preventDefault()
    setLanguageMenuIsOpen(false)
  }

  let path = typeof window !== "undefined" ? window.location.pathname : ""
  path = path.replace(`${locale}/`, "")

  const languageButtonActiveClass = languageMenuIsOpen ? style.active : ""
  return (
    <div
      onMouseLeave={languageSectionLeave}
      className={`${style.language} ${isScrolled ? style.scrolled : ""}`}
    >
      <button
        onClick={languageBtnClick}
        className={`${style.languageIcon} ${languageButtonActiveClass}`}
        type="button"
      >
        <FaLanguage />
        <span>Change Language</span>
      </button>
      <div
        className={style.languageMenu}
        style={
          languageMenuIsOpen
            ? {
                visibility: "visible",
                opacity: 1,
                transform: "translateY(0px)",
              }
            : {}
        }
      >
        {config.map(location => (
          <Link key={location.code} to={path} language={location.code}>
            {location.localName}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Language
