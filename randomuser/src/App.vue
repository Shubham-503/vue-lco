<template>
<main>
  <div class="app p-4 container-fluid">
    <div class="row">
      <div class="col col-md-4 mt-4 offset-md-4">
        <div class="text-center">
          <div v-if="user" class="text-center" >
            <UserCard :user="user" :newUser="fetchUser"/>
            <button @click="fetchUser" class="btn btn-primary btn-block btn-lg mt-2">
            New user

        </button>
          </div>
          <div v-else class="text-center">
            <div class="spinner-border spinner-grow" role="status"></div>
            <div class="text-white">Loading...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script>
import axios from 'axios'

import UserCard from './components/UserCard.vue'
export default {
  name: 'App',
  components: {
    UserCard
  },
  data() {
    return {
      user: null
    }
  },
  mounted(){
    this.fetchUser()
  },
  methods: {
    fetchUser: function(){
      axios.get('https://randomuser.me/api/')
      .then(res=>{
        console.log(res.data.results[0])
        this.user=res.data.results[0]
      })
      

    }
  }
}
</script>

<style>
main {
  height: 100vh;
  background-image: url('./assets/lco-api-one.jpg');
  background-position: center;
  background-size: cover;
}

.card {
  margin-top: 125px;
}

img {
  margin-top: -80px;
}
</style>
