import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import { HomeWrapper } from './styled'
import { modeList } from './conf'

export default function Home() {
  const navigate = useNavigate()

  /**
   * 处理函数
   */
  // 点击模式
  const handleClickMode = (mode: number) => {
    navigate('/game', { 
      state: {
        mode
      }
    })
  }

  return (
    <HomeWrapper>
      <h2 style={{ margin: 0 }}>怪像哎</h2>
      <div style={{ margin: '16px 0' }}>设计灵感来源于《羊了个羊》</div>
      <div style={{ width: '100%' }}>
        {
          modeList.map((item) => (
            <Button
              key={item.mode}
              className='btn'
              onClick={() => handleClickMode(item.mode)}
            >
              {item.label}
            </Button>
          ))
        }
      </div>
    </HomeWrapper>
  )
}
