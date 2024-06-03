import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import TimerEditor from './components/pages/TimerEditor/TimerEditor.jsx'
import ExtendedTimer from './components/pages/ExtendedTimer/ExtendedTimer.jsx'
import TimersPage from './components/pages/TimersPage/TimersPage.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TimersPage />} />
        <Route path="/editor" element={<TimerEditor />} />
        <Route path="/extendedTimer" element={<ExtendedTimer />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)
