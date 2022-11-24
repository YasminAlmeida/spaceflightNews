import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewPage from '../view/newsPage'
import BlogPage from '../view/blogPage'
import Header from '../components/header'

const RoutesList = () => {
  return (
    <BrowserRouter>
      <Header roteNews="News" roteBlog="Blog" />
      <Routes>
        <Route path="/" element={<NewPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RoutesList
