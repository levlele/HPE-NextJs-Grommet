import Head from "next/head";
import Link from 'next/link'
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import Introduction from '../components/CMP_Introduction/CMP_Introduction';

export default function Home() {
  return (
    <Grommet theme={hpe}>
      <Head>
        <link
          rel="preload"
          href="https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Introduction />

      <Box pad="xlarge" align="center">
        <Link href="/portfolio/cybersecurity">
          <a>Cybersecurity</a>
        </Link>
      </Box>
    </Grommet>
  )
}
