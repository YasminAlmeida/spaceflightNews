import * as S from './style'
import { interfaceArticle } from '../../types/typesInterface'

type Props = {
  articles: interfaceArticle[]
}

export const News = ({ articles }: Props): JSX.Element => {
  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toDateString()
  }
  return (
    <S.NewsContainer>
      {articles.map((article, index) => {
        return (
          <S.NewsItem key={index}>
            <S.NewsImage src={article.imageUrl} alt={article.title} />
            <S.ContainerInformation>
              <S.Data>{article.newsSite}</S.Data>
              <S.NewsTitle>{article.title}</S.NewsTitle>
              <S.NewsDescription>{article.summary}</S.NewsDescription>
              <S.ContainerExtra>
                <S.BtnReadMore href={article.url} target="_blank">
                  Read More
                </S.BtnReadMore>
                <S.Data>{formatDate(article.publishedAt)}</S.Data>
              </S.ContainerExtra>
            </S.ContainerInformation>
          </S.NewsItem>
        )
      })}
    </S.NewsContainer>
  )
}
export default News
