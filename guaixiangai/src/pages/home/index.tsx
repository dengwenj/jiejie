import React from 'react'
import { Button } from 'antd'

import { HomeWrapper } from './styled'

export default function Home() {
  return (
    <HomeWrapper>
      <h2>怪像哎</h2>
      <div>
        <Button>简单模式</Button>
        <Button>一般模式</Button>
        <Button>困难模式</Button>
        <Button>羊了个羊模式</Button>
      </div>
    </HomeWrapper>
  )
}
