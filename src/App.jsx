
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmark from './Components/Bookmark'
import Header from './Components/Header'

function App() {
  
  const [bookmark, setBookmark] = useState([]);

  const handeladdBookmark = blog =>{
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
  }

  return (
    <>
      <Header></Header>
      
      <div className=' md:flex'>

         <Blogs handeladdBookmark={handeladdBookmark} ></Blogs>
         <Bookmark bookmark={bookmark}></Bookmark>

      </div>
    </>
  )
}

export default App
