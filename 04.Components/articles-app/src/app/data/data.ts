import { Article } from '../models/article.model';
import { data } from './seed';

export class ArticleData {
  getData() : Article[] {
    let articles : Article[] = [];

    data.forEach(e => articles.push(new Article(e.title, e.description, e.author, e.imageUrl)));

    return articles;
  }
}