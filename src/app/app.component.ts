import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from './article';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'conduit';
  subTitle = 'A place to share your <u>knowledge</u>.';
  keyword = '';

  articles: Article[] = [];
  articles$: Observable<Article[]> = this.articlesService
    .getArticles()
    .pipe(
      catchError((err) => {
        console.log(err);
        return of({
          articles: [],
          articleCount: 0,
        })
      }),
      map((data) => data.articles)
    );

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    // this.articlesService
    //   .getArticles()
    //   .pipe(map((data) => data.articles))
    //   .subscribe((articles) => {
    //     this.articles = articles;
    //   });
  }

  searchArticle(keyword: string) {
    this.keyword = keyword;
    // this.articles = this.articles.filter((article) =>
    //   article.title.includes(keyword)
    // );
    console.log(keyword);
    console.log(this.articles);
  }
}
