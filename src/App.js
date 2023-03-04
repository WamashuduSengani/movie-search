import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from './components/search'
import AppBar from './components/AppBar'
import About from './components/About'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route index path="/About" element={<About />} />
        </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App