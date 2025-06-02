import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent<Props> = ({ children }) => {
  return <div className="container">{children}</div>
}

export default Container
