import React from 'react'
import { Input, Layout } from 'antd'

import { headerDefaultInfo } from '../../constant'

import './index.scss'

const { Header } = Layout

const AppHeader = () => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        maxWidth: '100%',
        height: '64px',
        boxShadow:
          '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
      }}
    >
      <div className="base-info">
        {/* <JavaScriptOutlined style={{ width: '32px', height: '32px' }} /> */}
        <div className="web-title">{headerDefaultInfo.title}</div>
      </div>
      <div className="option-contain">
        {/* <Input addonBefore={<SearchOutlined />} placeholder="large size" /> */}
      </div>
    </Header>
  )
}

export default AppHeader
