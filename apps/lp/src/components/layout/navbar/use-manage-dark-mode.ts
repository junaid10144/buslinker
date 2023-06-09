import { useCallback, useEffect, useMemo, useState } from 'react'

const isWindowDefined = typeof window !== 'undefined'

export const useManageDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (!isWindowDefined) return false
    return (
      localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    )
  })

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((i) => !i)
  }, [])

  useEffect(() => {
    document.documentElement.classList[isDarkMode ? 'add' : 'remove']('dark')
    localStorage.setItem('darkMode', isDarkMode + '')
  }, [isDarkMode])

  return useMemo(
    () => ({ isDarkMode, setIsDarkMode, toggleDarkMode }),
    [isDarkMode, setIsDarkMode, toggleDarkMode]
  )
}
