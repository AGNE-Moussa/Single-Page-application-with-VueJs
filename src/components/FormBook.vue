<template>
  <div class="form-container">
    <h1>Créer un Livre</h1>
    <form @submit.prevent="addBook" class="book-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="newBook.name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="comment">Comment</label>
        <textarea
          v-model="newBook.comment"
          class="form-control"
          rows="3"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="pageCount">Page Count</label>
        <input
          v-model="newBook.pageCount"
          class="form-control"
          type="number"
          required
        />
      </div>
      <div class="form-group">
        <label for="colorCover">Color</label>
        <select v-model="newBook.colorCover" class="form-control">
          <option value="ROUGE">ROUGE</option>
          <option value="ROSE">ROSE</option>
          <option value="BLEU">BLEU</option>
        </select>
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          v-model="newBook.price"
          class="form-control"
          type="number"
          required
        />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Créer</button>
        <router-link to="/" class="btn btn-secondary">Annuler</router-link>
      </div>
    </form>
    <div>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import BookService from "@/services/BookService";
export default {
  name: "FormBook",

  data() {
    return {
      newBook: {
        name: "",
        comment: "",
        pageCount: 0,
        colorCover: "ROSE", // Couleur par défaut
        price: 0,
      },
      error: "", // Déclaration de la variable d'erreur
    };
  },
  methods: {
    async addBook() {
      this.error = "";
      // Valider les champs requis
      if (
        !this.newBook.name ||
        !this.newBook.pageCount ||
        !this.newBook.price
      ) {
        this.error = "Veuillez remplir tous les champs obligatoires.";
        return;
      }
      // Valider le prix
      if (this.newBook.price > 49) {
        this.error = "Le prix ne doit pas dépasser 49€.";
        return;
      }
      try {
        await BookService.createBook(this.newBook);
        this.$router.push("/"); // Rediriger en cas de succès
      } catch (error) {
        this.error = "Une erreur est survenue lors de la création du livre.";
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-form .form-group {
  margin-bottom: 20px;
}

.book-form label {
  display: block;
  font-weight: bold;
}

.book-form .form-control {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-form textarea {
  resize: vertical;
}

.book-form .btn {
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.book-form .btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.book-form .btn-secondary {
  background-color: #6c757d;
  color: #fff;
  border: none;
}

.error {
  color: red;
}
</style>
