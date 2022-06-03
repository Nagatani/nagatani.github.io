import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const HeroPost = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section className='hero-post'>
      <h3>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a>{title}</a>
        </Link>
      </h3>
      <DateFormatter dateString={date} />
      <p className='except'>{excerpt}</p>
    </section>
  )
}

export default HeroPost
