import { ArticleModel } from './article.model';
import { UserModel } from './user.model';

export interface ViewModel {
    articles: ArticleModel[];
    user: UserModel;
}