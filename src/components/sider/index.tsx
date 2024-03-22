import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { menuDefaultValue } from '../../constant'

const { Sider } = Layout

const DefaultMenuItemKey = 'home'

const AppSider = () => {
  const navigate = useNavigate()

  const clickHandle = useCallback(
    (key: string) => {
      navigate(`/${key}`)
    },
    [navigate]
  )

  return (
    <Sider width={300} style={{ background: '#ffffff', paddingTop: '40px' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={[DefaultMenuItemKey]}
        style={{ height: '100%', borderRight: 0 }}
        items={menuDefaultValue}
        onClick={(val) => {
          val?.key && clickHandle(val.key)
        }}
      />
    </Sider>
  )
}

export default AppSider
