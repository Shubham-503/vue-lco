<template>
    <h2>movieList</h2>
    <div v-for="l in movies" :key="l.id" style="color:white">
        <p>{{l.movieName}}</p>
        <p>{{formatDate(l.date)}}</p>
        <a href="{{l.movieUrl}}" >VisitMovie</a>
        <button @click="onDelete(l.id)" > Delete  </button>
        
    </div>
</template>

<script>

import moment from 'moment'
export default {
    name: 'movie-List',
    props:['movies', 'deleteMovie'],
    data(){
        return {
            list:[]
        }
    },
    
    methods:{
        formatDate(date){
            return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
        },
        onDelete(id){
            this.deleteMovie(id)
        }
    }
}
</script>