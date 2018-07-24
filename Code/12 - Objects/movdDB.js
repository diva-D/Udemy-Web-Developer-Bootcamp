/*
Create an array of movie objects.
Each movie has:
    - title
    - rating
    - hasWatched
iterate through the array and print out:
    - You have watched "[title]" - [rating] stars
*/

var movieDB = [];

movieDB[0] = {
    title: "Tommy Boy",
    rating: 5,
    hasWatched: true,
};

movieDB[1] = {
    title: "Enter the Dragon",
    rating: 4,
    hasWatched: false,
};

movieDB[2] = {
    title: "Dumb and Dumber",
    rating: 4.5,
    hasWatched: true,
};

movieDB[3] = {
    title: "Jurassic World",
    rating: 3.5,
    hasWatched: false,
};

movieDB.forEach(function(movie) {
    if (movie.hasWatched === true) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    } else if (movie.hasWatched === false) {
        console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
        console.log("hasWatched not VALID!")
    }
});
