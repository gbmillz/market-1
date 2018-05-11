<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Alaba</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Sockets
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Cables
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Batteries
        </a>
      </li>
      <br>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Inverters
        </a>
      </li>
    </ul>
    <h2>Traders</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          Mr Spokola 0909230203
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          Mr Gbola 093493043434
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          Mr Dati 084830430434
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          Mr Patrick 34903043434
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Category',
  data () {
    return {
      msg: 'Electricals'
    }
  },
  computed: {
    ...mapGetters([
      'refreshed',
      'frequencyDate',
      'frequencyType',
      'componentsQuery',
      'generalMetricsData',
      'generalMetricsQuery',
      'generalMetricsLoading'
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
