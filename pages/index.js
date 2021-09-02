import Head from "next/head";
import Link from 'next/link';
import Script from 'next/script'
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
      <Script src="https://h50007.www5.hpe.com/hfws-static/js/framework/jquery/v-3-6-0/jquery.js" />
      <Script src="https://h50007.www5.hpe.com/hfws/us/en/hpe/latest.r/root?contentType=js&switchToCHF=true&hide_country_selector=true&hide_search=true&hide_cart=true&hide_sign_in=true" />
      
      <Introduction />

      <Box pad="xlarge" align="center">
        <Link href="/portfolio/cybersecurity">
          <a>Cybersecurity</a>
        </Link>
      </Box>
    </Grommet>
  )
}
