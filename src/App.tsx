import React from 'react'
import { Layout } from 'antd'

import { AppHeader, AppSider } from './components'

import './App.css'

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />
      <Layout>
        <AppSider />
      </Layout>
    </Layout>
  )
}

export default App
