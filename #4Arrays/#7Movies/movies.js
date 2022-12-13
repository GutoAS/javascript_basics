const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

function filterMovies(array) {
  return array
    .filter((obj) => obj.rating > 4 && obj.year >= 2018)
    .map((element) => element.title)
    .reverse((a, b) => a.rating - b.rating);
}

console.log(filterMovies(movies));
