export interface interfaceArticle {
  id: number,
  title: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  updatedAt: string,
  featured: boolean,
  events: any[],
  url: string,
}

export interface interfaceArticleResponse {
  data: interfaceArticle[],
}
