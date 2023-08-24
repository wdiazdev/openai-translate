import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../languages"

export type Language = keyof typeof SUPPORTED_LANGUAGES

export type AutoLanguage = typeof AUTO_LANGUAGE

export type FromLanguage = Language | AutoLanguage

export interface InitialState {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
  | { type: "SWITCH_LANGUAGES" }
  | { type: "SET_FROM_LANGUAGE"; payload: FromLanguage }
  | { type: "SET_TO_LANGUAGE"; payload: Language }
  | { type: "SET_FROM_TEXT"; payload: string }
  | { type: "SET_RESULT"; payload: string }

export enum SectionType {
  From = "From",
  To = "To",
}
