import { FooterWrapper } from './styled'

export default function Footer() {
  return (
    <FooterWrapper>
      <span>Copyright © 2022 by </span>
      <a 
        href="http://dengwj.vip" 
        target='_blank'
        style={{ marginRight: 5 }}
      >
        dengwj.vip
      </a>
      <span>|</span>
      <a 
        href='https://github.com/dengwenj/jiejie' 
        target='_blank'
        style={{ marginLeft: 5 }}
      > 
        代码开源
      </a>
    </FooterWrapper>
  )
}
