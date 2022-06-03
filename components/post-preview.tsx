import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div className='post-preview'>
      <h3 className="postTitle">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover_underline">{title}</a>
        </Link>
      </h3>
      <div className="date">
        <DateFormatter dateString={date} />
      </div>
      <p className="excerpt">{excerpt}</p>
    </div>
  )
}

export default PostPreview
