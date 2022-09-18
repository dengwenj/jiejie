import React from 'react'
import { Button } from 'antd'

import { HomeWrapper } from './styled'

export default function Home() {
  return (
    <HomeWrapper>
      <h2 style={{ margin: 0 }}>怪像哎</h2>
      <h3 style={{ margin: '16px 0' }}>设计灵感来源于《羊了个羊》</h3>
      <div style={{ width: '100%' }}>
        <Button className='btn'>简单模式</Button>
        <Button className='btn'>一般模式</Button>
        <Button className='btn'>困难模式</Button>
        <Button className='btn'>羊了个羊模式</Button>
      </div>
    </HomeWrapper>
  )
}
