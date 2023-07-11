

export class NewsArticle {
    constructor() {
        this.dateCreated = new Date();
    }

    public body!: string;
    public id!: number;
    public title!: string;
    public content!: Uint8Array[]; //a type for storing images
    public dateCreated: Date|null;
    public authorID?: string|null;
}



export class Athlete {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    get fullName(): string { // read-only property with getter function (this is not the same thing as a “function-property”)
        return this.firstName + " " + this.lastName;
    }
}