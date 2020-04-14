export default class Post {
    constructor(titile,image) {
        this.title = titile;
        this.date = new Date()
        this.image = image
    }

    toString() {
        return JSON.stringify(({
            title: this.title,
            date: this.date.toJSON(),
            img: this.image
        }))
    }

    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}