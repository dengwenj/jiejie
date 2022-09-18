import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'

export default function NotFount() {
  const navigate = useNavigate()

  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在"
      extra={<Button 
        type="primary" 
        onClick={() => navigate('/')}
      >
        返回首页
      </Button>}
    />
  )
}
