<template>
  <div>
    <b-form-textarea autofocus
      id="inputField"
      v-model="text"
      rows="10"
      placeholder="test, 테스트
  set, 설정">
</b-form-textarea>
    <br>
    <b-button variant="primary" @click="sendVocaToApp">변환</b-button>
  </div>
</template>

<script>
// import axios from 'axios'
//TODO: modal추가
export default {
  name: 'VocaTextField',
  data () {
    return {
      text: "",
      voca: []
    }
  },
  methods: {
    //입력받은 텍스트를 다듬은 후, 문자열 배열로 바꿔줌
    reformText: function(text) {
      text = text.replace(/\n/g, ",").split(',') //엔터값없애줌
      .map((item) => { //공백없애줌
        return item.trim()
      })
      .filter((item) => { //""값 없애줌
        return item != ""
      })

      return text
    },
    //유저가 작성한 텍스트를 테이블에 보낼 형식으로 바꿔주는 함수
    formatTextToVoca: function(text) {
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
    isEmpty: function(text) {
      if (text) {

      }
    },
    //App.vue로 값을 보냄
    sendVocaToApp: function() {
      // axios.get('https://reqres.in/api/users?page=2').then((response) => {
      //   console.log(response)
      // }).catch((err) => {
      //   console.log(err)
      // })

      this.text = this.reformText(this.text)
      this.voca = this.formatTextToVoca(this.text)

      window.localStorage.setItem('savedItems', this.voca)
      //TODO : 아이템 꺼내오기
      console.log(window.localStorage.getItem('savedItems'))
      //router에서 table로 값을 전달함
      this.$router.push({ name: 'Table', params: { vocaProp: this.voca }})
    }
  }
}
</script>

<style>
</style>
