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
    <b-button variant="primary" @click="sendVocaToTable">변환</b-button>
  </div>
</template>

<script>
export default {
  name: 'VocaTextField',
  data () {
    return {
      //텍스트 에이리어에 있는 텍스트를 담는 변수
      text: "",
      //텍스트를 리폼한 단어를 담는 변수
      voca: []
    }
  },
  created () {
    this.getSavedDataOnLocalStorage()
  },
  destroyed () {
    this.saveDataOnLocalStorage();
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
    //버튼클릭시 App.vue로 값을 보냄
    //TODO table버튼 눌러도 되도록
    sendVocaToTable: function() {
      this.text = this.reformText(this.text)
      this.voca = this.formatTextToVoca(this.text)

      //router에서 table로 값을 전달함
      this.$router.push({ name: 'Table', params: { vocaProp: this.voca }})
    },
    //로컬스토리지에 저장한 데이터를 가져옴
    getSavedDataOnLocalStorage: function() {
      let savedvocas = JSON.parse(localStorage.getItem('savedItems'))
      savedvocas.forEach((item) => {
          this.text += `${item.english}, ${item.korean}\n`
      })
    },
    //값을 전달하기전 로컬스토리지에 저장한다
    saveDataOnLocalStorage: function() {
      if (this.voca.length < 1) return
      localStorage.setItem('savedItems', JSON.stringify(this.voca))
    }
  }
}
</script>

<style>
</style>
