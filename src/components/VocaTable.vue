<template>
  <div>
    <button @click="showEn = !showEn">영어 비우기</button>
    <button @click="showKo = !showKo">한글 비우기</button>
    <button @click="shuffle()">shuffle</button>
    <table width="300" cellpadding="1" cellspacing="1" border="1" style="table-layout:fixed; word-break:break-all;">
      <tr v-for="item in contents()" :key="item.english">
        <td><p v-if="showEn">{{item.english}}</p></td>
        <td><p v-if="showKo">{{item.korean}}</p></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VocaTable',
  props: {
    vocaProp: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      vocas: '',
      showEn: true,
      showKo: true
    }
  },
  created(){
        if (this.vocaProp) {
          this.vocas = this.vocaProp
        }
    },
  methods: {
    shuffle: function() {
      for(var i = this.vocas.length-1; 0 <= i; i--) {
       var random = Math.floor(Math.random() * i)
       var temp = this.vocas.splice(random, 1)
      this.vocas = this.vocas.concat(temp)
      }
    },
    contents: function() {
      return this.vocas
    }
  },
  computed: {
  }
}
</script>

<style>
</style>
