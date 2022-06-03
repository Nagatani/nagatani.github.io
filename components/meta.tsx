import Head from 'next/head'
import { CMS_NAME, CMS_DESC, HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`${CMS_NAME} - ${CMS_DESC}`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Nagatani" />
      <meta name="twitter:title" content={`${CMS_NAME} - ${CMS_DESC}`} />
      <meta name="twitter:description" content={`@Nagataniが雑にいろいろ書くブログ`} />
      <meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
      <meta name="twitter:image" content="https://nagatani.github.io/twcard.jpg" />
    </Head>
  )
}

export default Meta
