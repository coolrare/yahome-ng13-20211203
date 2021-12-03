import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private httpClient: HttpClient) { }

  getArticles() {
    return this.httpClient.get<{ articles: Article[], articlesCount: number }>(
      'https://api.realworld.io/api/articles');
  }
}
