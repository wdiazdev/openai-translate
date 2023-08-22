import { AUTO_LANGUAGE } from "../languages"
import { Action, FromLanguage, Language, type InitialState } from "../types/types"
import { useReducer } from "react"

// 1 create initial state

const initialState: InitialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
}

// 2 create reducer

function reducer(state: InitialState, action: Action) {
  const { type } = action

  if (type === "SWITCH_LANGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    }
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    }
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    }
  }
  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    }
  }
  return state
}

export function useCustomReducer() {
  // 3 use useReducer hook
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] = useReducer(reducer, initialState)

  const setSwitchLaguages = () => {
    dispatch({ type: "SWITCH_LANGUAGES" })
  }

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload: payload })
  }
  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload: payload })
  }
  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload: payload })
  }
  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload: payload })
  }

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    setSwitchLaguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  }
}
