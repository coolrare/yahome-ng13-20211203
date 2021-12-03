import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle',
})
export class FilterArticlePipe implements PipeTransform {
  transform(articles: Article[], keyword: string): Article[] {
    return articles.filter((article) => article.title.includes(keyword));
  }
}
