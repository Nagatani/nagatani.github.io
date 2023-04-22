import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  if (dateString) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'yyyy/MM/dd HH:mm')}</time>
  }
  return <></>
}

export default DateFormatter
