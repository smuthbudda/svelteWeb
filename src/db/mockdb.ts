import { NewsArticle, Athlete } from '../dataObjects/objects'

export class SeedDataBase {

    public GenNewsArticles(amount: number): NewsArticle[] {
        let newsArticles: NewsArticle[] = [];

        for (let i = 0; i < amount; i++) {
            let a = new NewsArticle();
            a.title = "Test article " + i;
            a.body = "This is a test body";
            a.id = i;
            newsArticles.push(a)
        }
        return newsArticles;
    }

    public GenAthletes(amount: number): Athlete[] {
        let athletes: Athlete[] = [];

        for (let i = 0; i < amount; i++) {
            let a = new Athlete();
            a.firstName = "John " + i;
            a.lastName = "Doe";
            a.id = i;
            athletes.push(a)
        }
        return athletes;
    }
}