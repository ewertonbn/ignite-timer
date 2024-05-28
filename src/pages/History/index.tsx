import { useContext, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react'

import { CyclesContext } from '../../context/CyclesContext'

import {
  HistoryContainer,
  HistoryList,
  Pagination,
  PaginationButton,
  Status,
} from './styles'

export function History() {
  const [page, setPage] = useState(1)
  const { cycles } = useContext(CyclesContext)

  const totalPages = Math.ceil(cycles.length / 6)

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.slice((page - 1) * 6, page * 6).map((cycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>
                    {`${cycle.minutesAmount} ${cycle.minutesAmount < 2 ? 'minuto' : 'minutos'}`}{' '}
                  </td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status variant="green">Concluído</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status variant="red">Interrompido</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status variant="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
      <Pagination>
        <span>
          Página {page} de {totalPages}
        </span>
        <PaginationButton
          onClick={goToFirstPage}
          disabled={page === 1}
          aria-label="Ir para primeira página"
          title="Ir para primeira página"
        >
          <CaretDoubleLeft size={16} />
        </PaginationButton>
        <PaginationButton
          onClick={goToPreviousPage}
          disabled={page === 1}
          aria-label="Voltar uma página"
          title="Voltar uma página"
        >
          <CaretLeft size={16} />
        </PaginationButton>
        <PaginationButton
          onClick={goToNextPage}
          disabled={page === totalPages}
          aria-label="Avançar uma página"
          title="Avançar uma página"
        >
          <CaretRight size={16} />
        </PaginationButton>
        <PaginationButton
          onClick={goToLastPage}
          disabled={page === totalPages}
          aria-label="Ir para última página"
          title="Ir para última página"
        >
          <CaretDoubleRight size={16} />
        </PaginationButton>
      </Pagination>
    </HistoryContainer>
  )
}
