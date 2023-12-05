import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import YtProvider from './context/YtProvider'
import { Route,BrowserRouter as Router, Routes }from 'react-router-dom'
import PlayPage from './pages/PlayPage'
const App = () => {
  return (
    <Router>
        <YtProvider>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/play/:videoId' element={<PlayPage/>}></Route>
          </Routes>
        </YtProvider>
    </Router>
  )
}

export default App
