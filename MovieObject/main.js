class movie {
    constructor(title, genre, director, rating, releaseYear) {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.rating = rating;
        this.releaseYear = releaseYear;

    }

    overview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It recieved a rating of: ${this.rating}`;
    }
}


let theDarkKnight = new movie('The Dark Knight', 'Action', 'Christopher Nolan', 8, 2002);


console.log(theDarkKnight.overview())
