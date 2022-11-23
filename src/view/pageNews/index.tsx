import { useEffect, useState } from 'react';
import * as S from './style'

import News from '../../components/news'

import {api} from '../../services/api'
import {interfaceArticle} from '../../types/typesInterface'
const PageNews = () => {

  const [limit, setLimit] = useState<number>(15);
  const [articles, setArticles] = useState<interfaceArticle[]>([]);
  useEffect(() => {
    api.getAllArticles(limit).then((data)=>{
      setArticles(data)
    })
    .finally(() => {
      // setLoading(false);
    })
  }, [limit])
  const paginator = () => {
    setLimit(limit+15);
  }
  return (
    <S.NewsContainer>
      <S.Title>News</S.Title>
      <hr/>
      <News articles={articles}/>
      <S.BtnLoadMore onClick={paginator}>Load More +</S.BtnLoadMore>
    </S.NewsContainer>
  );
};
export default PageNews;