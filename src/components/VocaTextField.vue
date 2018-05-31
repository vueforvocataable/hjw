<template>
  <div>
    <textarea id="inputField" v-model="text" rows="30" cols="50" placeholder="test 테스트 - 이러한 형식으로 입력해보세요."></textarea>
    <br>
    <button @click="sendVoca()">click</button>
  </div>
</template>

<script>
export default {
  name: 'VocaTextField', 
  data () {
    return {
      text: "",
      voca: [  
        {"english": "sample", "korean": "샘플"},
        {"english": "sample2", "korean": "샘플2"}
        ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // textToVoca: function() {
    //   console.log(this.text)
    // },
    sendVoca: function() {
      this.$emit('addVoca', this.voca)
    }
  }
}
</script>

<style>
</style>
