import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from './components/search'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <SearchBar></SearchBar>
        <Routes>
        {/* <Route path="/" element={<SearchBar />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App