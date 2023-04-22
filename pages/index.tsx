import Container from '../components/container'
import Stories from '../components/stories'
import Layout from '../components/layout'
import { getAllPostsWithOutNoDate } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME, CMS_DESC } from '../lib/constants'
import Post from '../types/post'
import Header from '../components/header'
import Link from 'next/link'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const postParPage: number = 5
  const maxPage: number = Math.ceil(allPosts.length / postParPage)
  const newPosts = allPosts.slice(0, postParPage)

  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME} - {CMS_DESC}</title>
        </Head>
        <Container>
          <Header />
          {newPosts.length > 0 && <Stories posts={newPosts} />}
        </Container>
        <div className='archives_link'>
          <p>(1 / {maxPage})</p>
          <Link as={`/archives`} href="/archives"><a className="fusen">すべての記事を見る</a></Link>
        </div>
      </Layout>
    </>
  )
}

export default Index

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
