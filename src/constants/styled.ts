import { Theme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // extends the global DefaultTheme with our ThemeType.
}

