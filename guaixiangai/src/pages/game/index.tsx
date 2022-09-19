import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import { GameWrapper, ItemBlock } from './styled'

export default function Game() {
  const location = useLocation()
  const blockRef = useRef(null)

  useEffect(() => {
    const el = blockRef.current! as HTMLElement
    console.log(el.previousSibling)
    console.log(el.nextElementSibling)
    
  }, [])

  /**
   * 处理函数
   */
  // 点击每一块
  const handleClickItemBlock = (num: number) => {
    console.log('点击了', num)
  }
  
  return (
    <GameWrapper>
      <ItemBlock
        ref={blockRef}
        style={{
          left: 230,
          zIndex: 103,
          backgroundColor: '#000'
        }}
        onClick={() => handleClickItemBlock(1)}
      >🏆</ItemBlock>
      <ItemBlock
        style={{
          left: 200,
          top: 180,
          zIndex: 102
        }}
        onClick={() => handleClickItemBlock(2)}
      >🏆</ItemBlock>
      <ItemBlock
        style={{
          left: 230,
          top: 80,
          zIndex: 101
        }}
        onClick={() => handleClickItemBlock(3)}
      >🏆</ItemBlock>
      <ItemBlock
        style={{
          left: 230,
          top: 100,
          zIndex: 100
        }}
        onClick={() => handleClickItemBlock(4)}
      >🏆</ItemBlock>
    </GameWrapper>
  )
}
