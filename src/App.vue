<template>
  <div id="app">
    <div class="d-print-none">
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
    <!-- vocaAd를 불러오는 부분  -->
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
