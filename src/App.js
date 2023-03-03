import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from './components/search'
import AppBar from './components/AppBar'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
        <Route path="/" element={<SearchBar />} />
        </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App