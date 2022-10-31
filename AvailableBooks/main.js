class Book {
  constructor(Title, Author, ISBN, numCopies) {
    this.Title = Title;
    this.Author = Author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailabilty();
  }

  getAvailabilty() {
    if (this.numCopies === 0) {
      return "Out of Stock";
    } else if (this.numCopies < 10) {
      return "Low Stock";
    } else {
      return "in stock";
    }
  }

  sell(numSold = 1){
    this.numCopies = this.numCopies - numSold;
  };

  restock(numToRestock = 5){
    this.numCopies = this.numCopies + numToRestock;
  };
}

const hungerGames = new Book("HungerGames", "Suzanne Collins", 123919, 5);
console.log(hungerGames.availability)
hungerGames.restock(10);
console.log(hungerGames.availability);
hungerGames.sell(10);
console.log(hungerGames.availability);


