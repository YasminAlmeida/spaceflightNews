import * as S from './style'
import { interfaceArticle } from '../../types/typesInterface'

type Props = {
  blogs: interfaceArticle[]
}

export const Blogs = ({ blogs }: Props): JSX.Element => {
  const formatDate = (date: string) => {
    const newDate = new Date(date)
    return newDate.toDateString()
  }

  return (
    <S.ContainerBlogs>
      {blogs.map((blogs, index) => {
        return (
          <S.BlogItem key={index} index={index}>
            <S.ContainerImg>
              <S.BlogImage src={blogs.imageUrl} alt={blogs.title} />
              <S.SiteName>{blogs.newsSite}</S.SiteName>
            </S.ContainerImg>

            <S.ContainerInformation>
              <hr style={{ width: '80%' }}></hr>
              <S.BlogTitle>{blogs.title}</S.BlogTitle>
              <S.BlogDescription>{blogs.summary}</S.BlogDescription>
              <S.ContainerBottom>
                <a href={blogs.url}> Website Acess</a>
                <S.Date>{formatDate(blogs.updatedAt)}</S.Date>
              </S.ContainerBottom>
            </S.ContainerInformation>
          </S.BlogItem>
        )
      })}
    </S.ContainerBlogs>
  )
}
export default Blogs
