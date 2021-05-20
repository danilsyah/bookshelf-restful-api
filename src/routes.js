const { addBookHandler, getAllBooksHandler } = require('./handler');

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
];

module.exports = routes;
