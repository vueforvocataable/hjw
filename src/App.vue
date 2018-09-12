<template>
  <div id="app">
<<<<<<< HEAD

    <header class="d-print-none">
      <b-nav fill tabs>
        <b-nav-item> <!-- TODO 이 부분이 화면 켰을 때 먼저 실행되도록 하기 -->
=======
    <div class="d-print-none">
      <b-nav>
        <b-nav-item active> <!-- TODO 이 부분이 화면 켰을 때 먼저 실행되도록 하기 -->
>>>>>>> 17972f614f2cc18186587bb8865dcb312c71a942
          <router-link to="/textfield">textfield</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/table">table</router-link>
        </b-nav-item>
      </b-nav>
<<<<<<< HEAD
    </header>

    <body>
      <router-view></router-view>

    </body>

=======
    </div>
    <router-view></router-view>
     <VocaAd></VocaAd>
>>>>>>> 17972f614f2cc18186587bb8865dcb312c71a942
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
