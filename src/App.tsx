import { useState, useEffect } from "react"
import "./App.css"
import { ArrowsIcon } from "./components/Icons"
import { useCustomReducer } from "./hook/useCustomReducer"
import { AUTO_LANGUAGE } from "./languages"
import { LanguageSelector } from "./components/LanguageSelector"
import { SectionType } from "./types/types"
import TextArea from "./components/TextArea"
import { translate } from "./services/translate"

function App() {
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const {
    setSwitchLaguages,
    fromLanguage,
    toLanguage,
    setFromLanguage,
    setToLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    loading,
  } = useCustomReducer()

  useEffect(() => {
    if (fromLanguage === AUTO_LANGUAGE) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
  }, [fromLanguage])

  useEffect(() => {
    translate({ fromLanguage, toLanguage, text: fromText })
      .then((result) => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => {
        setResult("Error")
      })
  }, [fromText])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-[3rem] text-zinc-800">Google Translate Clone</h3>

      <form className="flex items-center justify-center gap-4">
        <div>
          <LanguageSelector onChange={setFromLanguage} type={SectionType.From} value={fromLanguage} />
          <TextArea type={SectionType.From} value={fromText} onChange={setFromText} />
        </div>
        <div>
          <button
            disabled={isDisable}
            onClick={setSwitchLaguages}
            className={
              isDisable
                ? "bg-zinc-200 py-2 px-4 rounded"
                : "bg-blue-500 py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
            }
          >
            <ArrowsIcon height="24" width="24" />
          </button>
        </div>
        <div>
          <LanguageSelector onChange={setToLanguage} type={SectionType.To} value={toLanguage} />
          <TextArea type={SectionType.To} value={result} onChange={setResult} loading={loading} />
        </div>
      </form>
    </div>
  )
}

export default App
