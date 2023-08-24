import { FC } from "react"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../languages"
import { FromLanguage, Language, SectionType } from "../types/types"

type Props =
  | { type: SectionType.From; value: FromLanguage; onChange: (laguage: FromLanguage) => void }
  | { type: SectionType.To; value: Language; onChange: (laguage: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language)
  }
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <select
        className="w-[200px] border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
        onChange={handleChange}
        value={value}
      >
        {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect Language</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
