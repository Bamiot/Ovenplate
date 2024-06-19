import { createStore } from 'zustand'

export type Theme = 'light' | 'dark'

export type ThemeStore = {
  theme: Theme
  toggleTheme: () => void
}

export const useThemeStore = createStore<ThemeStore>((set) => ({
  theme: 'light',
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === 'light' ? 'dark' : 'light',
    })),
}))
