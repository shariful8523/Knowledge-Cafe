
import './App.css'
import Blogs from './Components/Blogs'
import Bookmark from './Components/Bookmark'
import Header from './Components/Header'

function App() {
  

  return (
    <>
      <Header></Header>
      
      <div className=' md:flex'>
      <Blogs></Blogs>
      <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
