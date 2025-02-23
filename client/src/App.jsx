import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './Pages/Page'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
