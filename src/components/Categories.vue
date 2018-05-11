<template>
  <div class="hello">
    <h1>{{ name }}</h1>

    <h2>Alaba Market</h2>
    <ul>
      <li v-for="category in markets.Alaba" :key="category">
        <router-link to="/category/generalgoods">
          <a href="#" >
            {{ category.name }}
          </a>
        </router-link>
      </li>
    </ul>
    <h2>Relief Market</h2>
    <ul>
      <li v-for="category in markets.Relief" :key="category">
        <router-link to="/category/generalgoods">
          <a href="#" >
            {{ category.name }}
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Categories',
  computed: {
    ...mapGetters([
      'name',
      'markets'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
