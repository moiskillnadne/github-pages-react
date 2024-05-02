import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>Home Page</div>} />
      <Route path='/profile' element={<div>Profile Page</div>} />
      <Route path='/about' element={<div>Home Page</div>} />
    </Routes>
  )
}

export default App
