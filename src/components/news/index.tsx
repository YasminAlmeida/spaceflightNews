import { useEffect, useState } from 'react';
import * as S from './style'
import {api} from '../../services/api'

import {interfaceArticle} from '../../types/typesInterface'

type Props = {
  articles: interfaceArticle[]
}

export const News = ({articles}:Props): JSX.Element => {

 
  return (
    <S.NewsContainer>
      <h1>..</h1>
      {articles.map((article, index) => {
        return (
          <S.NewsItem key={index}>  
            <S.NewsImage src={article.imageUrl} alt={article.title}/>
            <S.Data>{article.publishedAt}</S.Data>
            <S.NewsTitle>{article.title}</S.NewsTitle>
            <S.NewsDescription>{article.summary}</S.NewsDescription>
          </S.NewsItem>
      )})}
    </S.NewsContainer>
  );
};
export default News;