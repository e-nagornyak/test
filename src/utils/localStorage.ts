const isBrowser = (): boolean => typeof window !== "undefined"

const localStorage = {
  getItem: <T>(key: string): T | null => {
    if (!isBrowser()) return null

    try {
      const item = window.localStorage.getItem(key)
      if (!item) return null
      return JSON.parse(item) as T
    } catch (error) {
      console.warn(`Error parsing key "${key}":`, error)
      localStorage.removeItem(key)
      return null
    }
  },

  setItem: <T>(key: string, value: T): void => {
    if (!isBrowser()) return

    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error saving key "${key}":`, error)
    }
  },

  removeItem: (key: string): void => {
    if (!isBrowser()) return
    window.localStorage.removeItem(key)
  },

  clear: (): void => {
    if (!isBrowser()) return
    window.localStorage.clear()
  },
}

export { localStorage }
