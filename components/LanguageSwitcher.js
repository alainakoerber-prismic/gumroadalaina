import { PrismicLink } from '@prismicio/react'
import { linkResolver } from '../prismicio'
import "/node_modules/flag-icons/css/flag-icons.min.css";


const LangIcon = ({ lang }) => {
  const code = lang.substring(3).toLowerCase()

  return <span className={`fi fi-${code}`} />
}

export const LanguageSwitcher = ({ altLangs = [] }) => {
  console.log(altLangs)
  return (
    <ul>
      {altLangs.map((altLang) => {
        return (
          <li key={altLang.lang}>
            <PrismicLink
              href={altLang}
              locale={altLang.lang}>
              <LangIcon lang={altLang.lang} />
            </PrismicLink>
          </li>
        )
      })}
    </ul>

    
  )
}

export default LanguageSwitcher