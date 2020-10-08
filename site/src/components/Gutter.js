import { h } from 'hyposcript'
import { Box } from 'hypobox'

export function Gutter({ withVertical, children }) {
  return (
    <Box px={[8, 8, 12]} py={withVertical ? [8, 8, 12] : 0}>
      {children}
    </Box>
  )
}
