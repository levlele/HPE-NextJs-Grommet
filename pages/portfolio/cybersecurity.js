import Link from 'next/link'
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';

export default function Home() {
  return (
    <Grommet theme={hpe}>
      <Box pad="xlarge" align="center">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Box>
    </Grommet>
  )
}