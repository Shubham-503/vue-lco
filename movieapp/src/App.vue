<template>
  <main>
    <h2>
      Movie App
    </h2>
    <MovieForm :addMovie="addMovie"  />
    <MovieList :movies="list" :deleteMovie="deleteMovie" />
  </main>
</template>

<script>
import MovieForm from './components/movieForm.vue';
import MovieList from './components/movieList.vue';
export default {

  name: 'App',
  data() {
    return {
      list: [],
      movies: [],
    }
  },
  components: {
    MovieForm,
    MovieList
  },
  methods: {
    addMovie(newMovie) {
      this.list = JSON.parse(localStorage.getItem('data'))
      console.log(this.list)
      if (!this.list) {
        localStorage.setItem("data", JSON.stringify([newMovie]))
      } else {
        console.log(this.list)
        this.list.push(newMovie)
        localStorage.setItem("data", JSON.stringify(this.list))
      }
    },
    deleteMovie(id){
     let idx= this.list.findIndex(el=>el.id==id)
     console.log(idx);
    (this.list.splice(idx,1))
    localStorage.setItem("data", JSON.stringify(this.list))
    }
  },
  mounted() {
    this.list = JSON.parse(localStorage.getItem('data'))
  }

}
</script>

<style>
* {
  padding: 0;
  outline: 0;
  margin: 0;
  box-sizing: border-box;
}

main {
  background-image: url("./assets/lco-movie.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>