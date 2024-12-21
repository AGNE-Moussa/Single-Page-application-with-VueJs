<template>
  <div>
    <table>
      <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Prix</th>
        <th scope="col">Nombre de pages</th>
        <th scope="col">Couleur de couverture</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book in bookList" :key="book.id">
        <td>{{ book.name.toUpperCase() }}</td>
        <td>{{ book.price }}</td>
        <td>{{ book.pageCount }}</td>
        <td>{{ book.colorCover }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import BookService from '@/services/BookService'
export default {
  name: 'ListBook',
  data() {
    return {
      bookList: [],
    }
  },
  created() {
    this.fetchBooks()
  },
  methods: {
    
    async fetchBooks() {
      try {
        const response = await BookService.getAllBooks()
        this.bookList = response.data
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
