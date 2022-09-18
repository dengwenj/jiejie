import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import RouterConf from './router'

export default function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>正在加载中...</div>}>
          {/* 映射路由 是写的组件 这里也相当于占个位，然后匹配到路径就在这里展示。 一级路由*/}
          <RouterConf />
        </Suspense>
      </Router>
    </>
  )
}
