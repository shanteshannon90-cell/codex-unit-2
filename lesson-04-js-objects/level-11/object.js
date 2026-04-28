// TODO: Build an object from a written specification and export it as default.
// Example spec: book with title, author, pages, and a summary() method assigned from a named function.
function summary() {
  return this.title + this.author;
}
const book = {
  /* TODO: implement spec */
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K Rowling",
  pages: 309,
};

book.summary = summary;

export default book;
