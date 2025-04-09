import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar'
import Books from './pages/books'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Books/>
    </div>
  )
}

export default App
