import React from 'react'

import { HomeOutlined } from '@ant-design/icons'
// import { MenuProps } from 'antd'

// type MenuItem = Required<MenuProps>['items'][number]

export const headerDefaultInfo = {
  title: '日常内容笔记',
}

export const menuDefaultValue = [
  {
    key: 'home',
    label: (
      <p style={{ textAlign: 'left', fontSize: '14px', fontWeight: 'bold' }}>
        内容总览
      </p>
    ),
  },
  {
    key: 'test',
    label: <p>测试</p>,
  },
]
