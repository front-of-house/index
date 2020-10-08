import { h } from "hyposcript";
import { Box } from "hypobox";

import { Info } from '@/src/icons/Info'

export function Alert({ children, ...rest }) {
  return (
    <Box {...rest}>
      <Box f fw aic c="b" px={6} py={6} css={{ borderRadius: '6px', boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 10px 20px rgba(0, 0, 0, 0.04)' }} fs={6}>
        <Box w={[1, 32]} h="24">
          <Info w={32} h={32} />
        </Box>
        <Box w={[1, 'calc(100% - 32px)']}>
          <Box pt={[3, 0]} pl={[0, 4]}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
