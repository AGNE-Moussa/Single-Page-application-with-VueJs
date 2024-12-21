import axios from "axios";
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json'
  }
});

class BookService {
  getAllBooks() {
    return apiClient.get('/books');
  }

  getBook(bookId) {
    return apiClient.get(`/book?id=${bookId}`);
  }

  createBook(book) {
    return apiClient.post('/book', book);
  }

  updateBook(book) {
    return apiClient.put('/book', book);
  }

  deleteBook(bookId) {
    return apiClient.delete(`/book?id=${bookId}`);
  }
}

export default new BookService();