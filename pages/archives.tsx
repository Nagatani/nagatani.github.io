import Container from '../components/container'
import ArchiveStories from '../components/archive-stories'
import Layout from '../components/layout'
import { getAllPostsWithOutNoDate } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import Header from '../components/header'

type Props = {
  allPosts: Post[]
}

const Archives = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Header />
          <ArchiveStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export default Archives

export const getStaticProps = async () => {
  const allPosts = getAllPostsWithOutNoDate([
    'title',
    'date',
    'slug',
    'excerpt',
    'ogImage',
  ])

  return {
    props: { allPosts },
  }
}
