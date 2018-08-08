<template>
  <div id="app">
    <div class="d-print-none">
      <b-nav>
        <b-nav-item active> <!-- TODO 이 부분이 화면 켰을 때 먼저 실행되도록 하기 -->
          <router-link to="/textfield">textfield</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/table">table</router-link>
        </b-nav-item>
      </b-nav>
    </div>
    <router-view></router-view>
     <VocaAd></VocaAd>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VocaAd from './components/VocaAd.vue'

Vue.use(BootstrapVue)

export default {
  name: 'App',
  components: {
    VocaAd
  },
  data: function () {
    return {
    }
  }
};
</script>

<style>
</style>
