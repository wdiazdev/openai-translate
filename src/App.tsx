import { useState, useEffect } from "react"
import "./App.css"
import { ArrowsIcon } from "./components/Icons"
import { useCustomReducer } from "./hook/useCustomReducer"
import { AUTO_LANGUAGE } from "./languages"

function App() {
  const [isDisable, setIsDisable] = useState<boolean>(false)
  const { setSwitchLaguages, fromLanguage, toLanguage } = useCustomReducer()

  useEffect(() => {
    if (fromLanguage === AUTO_LANGUAGE) {
      setIsDisable(true)
    }
  }, [fromLanguage])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-[4rem] text-zinc-800">Welcome!</h1>

      <div className="flex items-center justify-center gap-4">
        <div>
          <h3>From</h3>
          <p>{fromLanguage}</p>
        </div>
        <div>
          <button
            disabled={isDisable}
            onClick={setSwitchLaguages}
            className={
              isDisable
                ? "bg-zinc-300 py-2 px-4 rounded"
                : "bg-blue-500 py-2 px-4 rounded cursor-pointer hover:bg-blue-600"
            }
          >
            <ArrowsIcon height="24" width="24" />
          </button>
        </div>
        <div>
          <h3>TO</h3>
          <p>{toLanguage}</p>
        </div>
      </div>
    </div>
  )
}

export default App
