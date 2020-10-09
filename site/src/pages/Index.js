import { h } from "hyposcript";
import { Box } from "hypobox";

import { Gutter } from "@/src/components/Gutter";

export function getPaths() {
  return ["/"];
}

export function Page({ head }) {
  head({
    title: 'sure thing',
    description: 'you got it',
    link: [
      { rel: 'icon', type: 'image/png', href: '/static/favicon.png' },
    ]
  });

  return (
    <Gutter withVertical>
      <Box as="h1" fs={4} mt={4}>
        sure thing
      </Box>
    </Gutter>
  );
}
