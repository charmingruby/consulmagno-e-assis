import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(rawDate: Date) {
  const formattedDate = format(rawDate, 'dd/MM/yyyy', { locale: ptBR })
  return formattedDate
}
