import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: 14px;
  color: #282a35
  line-height: 22px;
`

//   color: ${(props) => (props.tipo === 'principal' ? '#282A35' 'secundario' : #949494)};
