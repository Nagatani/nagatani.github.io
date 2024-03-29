import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME, CMS_DESC, HOME_OG_IMAGE_URL, HOME_TW_IMAGE_URL } from '../../lib/constants'
import PostType from '../../types/post'
import 'zenn-content-css'
import markdownToHtml from 'zenn-markdown-html'

type Props = {
  post: PostType
  preview?: boolean
}

const Post = ({ post, preview }: Props) => {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="znc">
              <Head>
                <title>
                  {post.title} | {CMS_NAME}
                </title>
                <meta
                  name="description"
                  content={`${CMS_NAME} - ${CMS_DESC} | ${post.excerpt}`}
                />
                <meta property="og:image" content={post.ogImage ? post.ogImage.url : HOME_OG_IMAGE_URL} />
                <meta property="og:title" content={post.title + " | " + CMS_NAME} />
                <meta property="og:description" content={`${CMS_NAME} - ${CMS_DESC} | ${post.excerpt}`} />
                <meta name="twitter:image" content={post.ogImage ? post.ogImage.url : HOME_TW_IMAGE_URL} />
                <meta name="twitter:title" content={post.title + " | " + CMS_NAME} />
                <meta name="twitter:description" content={`${CMS_NAME} - ${CMS_DESC} | ${post.excerpt}`} />
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'ogImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
