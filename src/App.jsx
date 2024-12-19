import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import ContactMe from './contact-me.jsx'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='contact-me' element={<ContactMe />}></Route>
      </Routes>
    </Router>
  )
}

export default App
