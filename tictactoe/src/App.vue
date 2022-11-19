<template>
 <h1>tictactoe</h1>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>


<style>
main {
  height: 100vh;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.box {
  height: 150px;
}
</style>
