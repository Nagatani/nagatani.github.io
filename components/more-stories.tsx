import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}
const sortInfoByDate = (a: Post, b: Post) => {
  const adate = new Date(a.date);
  const bdate = new Date(b.date);
  return adate < bdate ? 1 : -1;
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {posts.sort((a, b) => sortInfoByDate(a,b)).map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </section>
  )
}

export default MoreStories
