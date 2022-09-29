import 'styled-components'
import { defaultThemes } from '../styles/themes/default'

type themeType = typeof defaultThemes

declare module 'styled-components' {
  export interface DefaultTheme extends themeType {}
}
