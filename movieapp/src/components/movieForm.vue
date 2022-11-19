<template>
    <div>
        <form @submit.prevent="onSubmit">
            <input type="text" name='movieName' v-model="movieName" />
            <input type="text" name='movieUrl' v-model="movieUrl" />
            <button type="submit">Add to List</button>
        </form>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'Movie-Form',
    props: ['addMovie'],
    data() {
        return {
            movieName: "",
            movieUrl: ""
        }
    },
    methods: {
        onSubmit() {
            console.log(this.movieName, this.movieUrl)
            const newMovie = { id: uuidv4(), movieName: this.movieName, movieUrl: this.movieUrl, date: new Date().now }
            this.addMovie(newMovie)
            // let list = JSON.parse(localStorage.getItem('data'))
            // console.log(list)
            // if(!list){
            //     localStorage.setItem("data",JSON.stringify([ {id:uuidv4(),movieName:this.movieName,movieUrl: this.movieUrl,date:new Date().now}]))
            // } else {
            //     console.log(list)
            //     list.push({id:uuidv4(),movieName:this.movieName,movieUrl: this.movieUrl,date:new Date().now})
            //     localStorage.setItem("data",JSON.stringify(list))
            // }

            this.movieName = ""
            this.movieUrl = ""

        }
    }
}
</script>