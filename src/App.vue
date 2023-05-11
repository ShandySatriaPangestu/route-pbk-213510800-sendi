<template>
  <div>
    <div class="button-group">
      <button class="left" @click="redirect">Redirect</button>
      <button class="left" @click="back">Go Back</button>
      <button class="left" @click="forward">Go Forward</button>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'ToDo' }">Kegiatan</router-link>
    </nav>

    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name :'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(+1)
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
}

.button-group .left {
  margin-right: 5px;
}
</style>