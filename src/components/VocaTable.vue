<template>
  <div>
    sub
    <table border=1>
      <tr v-for="item in vocaProp" :key="item.english">
        <td>{{item.english}}</td>
        <td>{{item.korean}}</td>
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
      default: []
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style>
</style>
