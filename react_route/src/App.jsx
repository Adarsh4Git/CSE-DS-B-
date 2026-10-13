import { Link, Routes, Route } from 'react-router-dom'

function Home() {
  return <h1>This is my Home Page</h1>
}

function About() {
  return <h1>This is my About Page</h1>
}

function NotFound(){
  return <h1>This route is not available</h1>
}

const App = () => {
  return (
    <>
      <nav>
        <Link to="/" end>HOME</Link>
        <Link to="/About">ABOUT</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App