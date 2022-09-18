import styled from 'styled-components'

import bgi from './assets/images/bgi.jpeg'

export const AppWrapper = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background: url(${bgi});
  background-size: cover;
`