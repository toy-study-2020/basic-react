import { useEffect } from "react"

export const useOnMounted = (effect) => {
  useEffect(effect, [])
}