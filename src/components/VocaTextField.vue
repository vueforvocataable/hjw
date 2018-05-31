<template>
  <div>
    <textarea id="inputField" v-model="text" rows="30" cols="50" placeholder="test, 테스트
set, 설정"></textarea>
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
      voca: [ ]
    }
  },
  methods: {
    textToVoca: function() {
      var inputField = document.getElementById("inputField")
      var text = inputField.value.replace(/\n/g, ",").split(',')
      .map((item) => {
        return item.trim()
      })
      .filter((item) => {
        return item != ""
      })

      return text
    },
    formatToVoca: function(text) {
      var vocaObj = new Array()
      var cnt = 0
      var englishItemTemp

      text = text.forEach((item) => {
        cnt++
        if (cnt % 2 == 1) {
          englishItemTemp = item
        } else {
          vocaObj.push({
            "english": englishItemTemp,
            "korean": item
          })
        }
      })

      return vocaObj
    },
    sendVoca: function() {
      this.text = this.textToVoca()
      this.voca = this.formatToVoca(this.text)
      this.$emit('addVoca', this.voca)
    }
  }
}
</script>

<style>
</style>
