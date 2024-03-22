import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import App from '../App'
import { TestPage } from '../pages'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  )
}

export default AppRouter
