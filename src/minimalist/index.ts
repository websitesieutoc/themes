import { extendTheme } from '@chakra-ui/react'

// Global config for Chakra UI
import config from './config'

// Global style overrides
import styles from './styles'

// Foundational style overrides, most design tokens are defined here
import borders from './foundations/borders'

// Component style overrides
import components from './components'

export default extendTheme({ config, styles, borders, components })
