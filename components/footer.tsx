import Container from './container'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Link as={`/posts/about`} href="/posts/about">
          <a className="hover_underline">About this web site.</a>
        </Link>
        <small>&copy;2022- <a href="https://nagatani.me/">Nagatani</a></small>
      </Container>
    </footer>
  )
}

export default Footer
