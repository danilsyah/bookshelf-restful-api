const {
  addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler,
} = require('./handler');

const routes = [
  {
    // endpoint menyimpan buku
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    // endpoint menampilkan seluruh buku
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    // endpoint menampilkan detail buku
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,

  },
  {
    // endpoint edit buku
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
];

module.exports = routes;
