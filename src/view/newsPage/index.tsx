import { useEffect, useState } from 'react'
import * as S from './style'

import News from '../../components/news'
import Loading from '../../components/loading'

import { api } from '../../services/api'
import { interfaceArticle } from '../../types/typesInterface'

const NewPage = () => {
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState<number>(15)
  const [articles, setArticles] = useState<interfaceArticle[]>([])
  useEffect(() => {
    setLoading(true)
    api
      .getAllArticles(limit)
      .then((data) => {
        setArticles(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [limit])
  const paginator = () => {
    setLimit(limit + 15)
  }
  return (
    <S.NewsContainer>
      <S.Title>News</S.Title>
      <hr />

      {articles.length > 0 && <News articles={articles} />}
      {articles.length > 0 && !loading && (
        <S.BtnLoadMore onClick={paginator}>{loading ? 'Loading...' : 'Load More'}</S.BtnLoadMore>
      )}
      {loading && <Loading />}
    </S.NewsContainer>
  )
}
export default NewPage
