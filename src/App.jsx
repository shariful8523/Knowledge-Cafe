
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs'
import Bookmark from './Components/Bookmark'
import Header from './Components/Header'

function App() {
  
  const [bookmark, setBookmark] = useState([]);
  const [mark, setMark]= useState([])

  const handeladdBookmark = blog =>{
      const newBookmark = [...bookmark, blog];
      setBookmark(newBookmark);
  }

  const handeladdMark = (reading_time) => {
    const newMark = Number(mark) + Number(reading_time); 
    setMark(newMark);
    
  };

  return (
    <>
      <Header></Header>
      
      <div className=' md:flex'>

         <Blogs handeladdBookmark={handeladdBookmark} handeladdMark={handeladdMark}></Blogs>
         <Bookmark bookmark={bookmark} mark={mark}></Bookmark>

      </div>
    </>
  )
}

export default App
