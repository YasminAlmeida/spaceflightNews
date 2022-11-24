import * as S from './style'
import { useEffect, useState } from 'react'
import Blogs from '../../components/blogs'
import Loading from '../../components/loading'

import { api } from '../../services/api'
import { interfaceArticle } from '../../types/typesInterface'

const BlogPage = () => {
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState<number>(15)
  const [blogs, setBlogs] = useState<interfaceArticle[]>([])
  useEffect(() => {
    setLoading(true)
    api
      .getAllBlogs(limit)
      .then((data) => {
        setBlogs(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [limit])
  const paginator = () => {
    setLimit(limit + 15)
  }
  return (
    <S.Container>
      <S.Title>Blog Page</S.Title>
      <hr />

      {blogs.length > 0 && <Blogs blogs={blogs} />}
      {blogs.length > 0 && !loading && (
        <S.BtnLoadMore onClick={paginator}>{loading ? 'Loading...' : 'Load More'}</S.BtnLoadMore>
      )}
      {loading && <Loading />}
    </S.Container>
  )
}
export default BlogPage
