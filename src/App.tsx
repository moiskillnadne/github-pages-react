import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/home'>Home Page</Route>
      <Route path='/profile'>Profile Page</Route>
      <Route path='/about'>About Page</Route>
    </Routes>
  )
}

export default App
