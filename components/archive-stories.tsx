import ArchivesPostPreview from './archives-post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}
const sortInfoByDate = (a: Post, b: Post) => {
  const adate = new Date(a.date);
  const bdate = new Date(b.date);
  return adate < bdate ? 1 : -1;
};

const ArchiveStories = ({ posts }: Props) => {
  return (
    <section className='archives'>
      {posts.sort((a, b) => sortInfoByDate(a,b)).map((post) => (
        <ArchivesPostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </section>
  )
}

export default ArchiveStories
