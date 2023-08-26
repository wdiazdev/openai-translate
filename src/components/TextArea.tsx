import { FC } from "react"
import { SectionType } from "../types/types"

interface Props {
  type: SectionType
  loading?: boolean
  onChange: (value: string) => void
  value: string
}

interface PlaceholderProps {
  type: SectionType
  loading?: boolean
}

const TextArea: FC<Props> = ({ loading, type, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  const handlePlaceholder = ({ type, loading }: PlaceholderProps) => {
    if (type === SectionType.From) return "Your text here..."
    if (loading === true) return "Loading..."
    return "Translation"
  }

  return (
    <textarea
      name="textarea"
      cols={30}
      rows={10}
      value={value}
      placeholder={handlePlaceholder({ type, loading })}
      onChange={handleChange}
      disabled={type === SectionType.To}
      className={
        type === SectionType.From
          ? "border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500 focus:border-2 mt-2 resize-none"
          : "border border-gray-300 rounded py-2 px-3 mt-2 bg-zinc-200 focus:outline-none resize-none"
      }
    ></textarea>
  )
}

export default TextArea
