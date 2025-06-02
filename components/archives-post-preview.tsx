import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  slug: string
}

const ArchivesPostPreview = ({
  title,
  date,
  slug,
}: Props) => {
  return (
    <div className='post-preview'>
      <div className="date">
        <DateFormatter dateString={date} />
      </div>
      <span> - </span>
      <h3 className="postTitle">
        <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover_underline">
          {title}
        </Link>
      </h3>
    </div>
  )
}

export default ArchivesPostPreview
