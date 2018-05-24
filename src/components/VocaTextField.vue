<template>
  <div>
    <textarea id="inputField" v-model="text" rows="30" cols="50" placeholder="test 테스트 - 이러한 형식으로 입력해보세요."></textarea>
    <br>
    <button @click="getText()">click</button>
  </div>
</template>

<script>
export default {
  name: 'app', 
  data () {
    return {
      text: "",
      vocaObject: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getText: function() {
      console.log(this.text)
    }
  }
}
</script>

<style>
</style>
