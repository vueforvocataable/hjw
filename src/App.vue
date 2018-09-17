<template>
  <div id="app">

    <header class="d-print-none">
      <b-nav fill tabs>
        <b-nav-item> 
          <router-link to="/textfield" replace active-class>입력</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/table" replace>단어시험지</router-link>
        </b-nav-item>
           <b-nav-item>
          <router-link to="/explanation" replace>가이드</router-link>
        </b-nav-item>
      </b-nav>
    </header>

    <body>
      <router-view></router-view>

    </body>

  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Explanation from './components/Explanation.vue'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    Explanation
  },
  data: function () {
    return {
    }
  }
};
</script>

<style>
</style>
