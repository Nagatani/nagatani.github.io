import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

const Header = () => {
  return (
    <section className='post-header'>
      <h2>
        <Link href="/"><a className="hover:underline">{CMS_NAME}</a></Link>
      </h2>
    </section>
  )
}

export default Header
