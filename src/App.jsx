import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home/Home'
import Dog from './Dog/Dog'
import Faq from './Faq/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    {/* <Dog /> */}
    {/* <Faq /> */}
    </>
  )
}

export default App
