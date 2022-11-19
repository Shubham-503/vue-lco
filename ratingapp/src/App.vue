<template>
  <div class="container">
    <div class="card card-body text-center p-5 mt-5 border-primary">
      <div class="" >
        <i v-for="i in [1,2,3,4,5]" :key="i" @click="setRating(i)" class="fa fa-star text-warning fa-6x"></i>
      </div>
      <h1 class="text-success mt-4" v-if="rating===1">Ahh! just one star, Sorry to hear that😔</h1>
      <h1 class="text-success mt-4" v-if="rating===2">2 stars, we would love to improve</h1>
      <h1 class="text-success mt-4" v-if="rating===3">3 stars, Thank you </h1>
      <h1 class="text-success mt-4" v-if="rating===4">4 stars, Thank you for your voting</h1>
      <h1 class="text-success mt-4" v-if="rating===5">5 stars, thank you a lot</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      rating: null
    }
  },
  methods: {
    setRating(rating) {
      this.rating = rating
    }
  }
}
</script>

<style>
body {
  background-color: #333;
}
</style>