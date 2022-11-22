import { useEffect, useState } from 'react';
import * as S from './style'

import News from '../../components/news'

import {api} from '../../services/api'
import {interfaceArticle} from '../../types/typesInterface'
const PageNews = () => {

  // const [limit, setLimit] = useState<number>(15);
  const [articles, setArticles] = useState<interfaceArticle[]>([]);
  useEffect(() => {
    api.getAllArticles().then((data)=>{
      console.log(data)
      setArticles(data)
    })
    .finally(() => {
      console.log(articles)
    })
  }, [])
  return (
    <S.NewsContainer>
      <h1>News</h1>
      <News articles={articles}/>
    </S.NewsContainer>
  );
};
export default PageNews;