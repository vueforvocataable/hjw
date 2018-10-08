<template>
  <div id="app">
    
    <div>
      <b-navbar toggleable class="nav d-print-none">
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
        
          <b-navbar-nav class="mx-auto">
               <!-- <b-navbar-brand>BootstrapVue</b-navbar-brand> -->
            <b-nav-item>
              <router-link to="/textfield" replace>입력</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/table" replace>단어시험지</router-link>
            </b-nav-item>
            <!-- <b-nav-item>
              <router-link to="/explanation" replace>가이드</router-link>
            </b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

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
      return {}
    }
  };

</script>

<style>
  .nav {
    background-color: white;
    box-shadow: 0px 1px #c03546;
    font-weight: bold;
  }
  a {
    color:#c03546;;
  }
   a:hover {
    color:#c03546;
    text-decoration: none;
  }
  .router-link-exact-active {
  color: #c03546;
}
</style>
