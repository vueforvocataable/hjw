<template>
  <div id="app">
    <div>
      <nav>
        <router-link to="/textfield">textfield</router-link>
        <router-link to="/table">table</router-link>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
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
