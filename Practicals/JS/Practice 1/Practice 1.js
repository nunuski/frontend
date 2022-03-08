function getAuthors() {
  const quote1 = `\"A goal is just a dream with a deadline.\"-Drake`,
    quote2 = `\"The unexamined life is not worth living.\"-Socrates`;

  let author1 = "Drake",
    author2 = "Socrates";

  (quote1 = author1), (quote2 = author2);

  return [author1, author2];
}

getAuthors();

// const quote1 = `\"A goal is just a dream with a deadline.\"-Drake`;

// let author1 = quote1.slice(42, 47);

// // let Drake = "A goal-Drake";

// console.log(author1);

// const quote2 = `\"The unexamined life is not worth living.\"-Socrates`;

// let author2 = quote2.slice(43, 51);

// // let Drake = "A goal-Drake";

// console.log(author2);

// function quote() {
//   console.log(`\"A goal is just a dream with a deadline.\"-Drake`);
// }

// quote();

// const getAuthors = function (authorName) {
//   let quote = `\"A goal is just a dream with a deadline.\"-Drake`;
//   return author;
// };

// const authorName = quote(authorName);
