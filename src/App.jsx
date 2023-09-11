import Header from './components/header/Header'
import './App.css'
import Blogs from './components/header/blogs/blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
function App() {
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
