import { useState } from 'react'
import Header from './assets/header'
import Section from './assets/section'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import EducationHub from './assets/EducationHub'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <EducationHub></EducationHub>
      {/* <Header></Header>
      <Section></Section> */}
    </div>
  )
}

export default App
