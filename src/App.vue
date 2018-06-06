<template>
  <div id="app">
    <div>
      <b-nav>
        <b-nav-item active>
          <router-link to="/textfield">textfield</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/table">table</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
  },
  data: function () {
    return {
    }
  }
};
</script>

<style>
</style>
