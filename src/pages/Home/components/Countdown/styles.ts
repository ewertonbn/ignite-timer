import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 1rem;
  color: ${(props) => props.theme.textColor};
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    font-size: 10rem;
    line-height: 8rem;
  }

  span {
    background: ${(props) => props.theme.boxColorSecondary};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 4rem;
  }
`
